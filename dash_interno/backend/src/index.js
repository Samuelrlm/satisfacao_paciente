const express = require('express')
const { Pool } = require('pg')
require('dotenv').config()
const cors = require('cors')
const oracledb = require('oracledb')
const req = require('express/lib/request')
const res = require('express/lib/response')

const PORT = 4002

const pool = new Pool({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.USER_DB,
    password: process.env.PASS_DB,
    port: process.env.PORT_DB
})

const app = express()

app.use(express.json())
app.use(cors())


app.get('/get/all/notas', async (req, res) => {
    const dataInicial = req.params.dataInicial;
    const dataFinal = req.params.dataFinal;
    try {
        console.log({dataInicial ,dataInicial})
      const todasAvaliacoes = await pool.query(`SELECT * FROM contador_notas order by nota asc`)
      return res.status(200).send(todasAvaliacoes.rows)
    } catch (err) {
      console.log(err)
      return res.status(400).send(err)
    }
})
  
app.get('/get/grupo/notas/:dataInicial/:dataFinal', async (req, res) =>{
    const dataInicial = req.params.dataInicial
    const dataFinal = req.params.dataFinal
    
    try {
        const notasQuantidade = await pool.query(`SELECT nota, COUNT(*) as quantidade FROM satisfacao_paciente WHERE data_resposta BETWEEN '${dataInicial}' AND '${dataFinal}'  GROUP BY nota ORDER BY nota ASC`)
        const resultado = [];
        
        for (let i = 0; i <= 10; i++) {
          const row = notasQuantidade.rows.find(row => row.nota === i) || {nota: i, quantidade: 0};
          resultado.push({nota: row.nota, quantidade: row.quantidade});
        }
        
        return res.status(200).send(resultado);
      } catch (err) {
        console.log(err);
        return res.status(400).send(err);
      }
})

app.get('/get/percent/mood/:dataInicial/:dataFinal', async (req, res) =>{
    const dataInicial = req.params.dataInicial
    const dataFinal = req.params.dataFinal
    try{
        const notasTotal = await pool.query(`SELECT * FROM satisfacao_paciente WHERE data_resposta BETWEEN '${dataInicial}' AND '${dataFinal}' `)
        const vlNotasTotal = notasTotal.rowCount
        const notasVermelhas = await pool.query(`SELECT * FROM satisfacao_paciente WHERE nota >= 0 and nota <= 6 AND data_resposta BETWEEN '${dataInicial}' AND '${dataFinal}'`)
        const vlNotasVermelhas = notasVermelhas.rowCount 
        const notasAmarelas = await pool.query(`SELECT * FROM satisfacao_paciente WHERE nota >= 7 and nota <= 8 AND data_resposta BETWEEN '${dataInicial}' AND '${dataFinal}'`)
        const vlNotasAmarelas = notasAmarelas.rowCount
        const notasVerdes = await pool.query(`SELECT * FROM satisfacao_paciente WHERE nota >= 9 and nota <= 10 AND data_resposta BETWEEN '${dataInicial}' AND '${dataFinal}'`)
        const vlNotasVerdes = notasVerdes.rowCount

        const percentNotasVermelhas = (vlNotasVermelhas/vlNotasTotal) * 100
        const percentNotasAmarelas = (vlNotasAmarelas/vlNotasTotal) * 100
        const percentNotasVerdes = (vlNotasVerdes/vlNotasTotal) * 100

        return res.status(200).send({
            "total_notas": vlNotasTotal,
            "notas_vermelhas": vlNotasVermelhas,
            "notas_amarelas": vlNotasAmarelas,
            "notas_verdes": vlNotasVerdes,
            "percent_notas_vermelhas": percentNotasVermelhas,
            "percent_notas_amarelas": percentNotasAmarelas,
            "percent_notas_verdes": percentNotasVerdes
        })
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
    
})

app.post('/post/links/nao/enviados', async (req, res) => {
    const{
        atendimento
    } = req.body
    try{
        const inserirRegistro = await pool.query(`INSERT INTO nao_enviados (atendimento) values(${atendimento})`)
        
        return res.status(200).send(`Success`)
        
    }catch(err){
        return res.status(400).send(err)
    }
})

app.get('/get/info/links/:dataInicial/:dataFinal', async (req, res) =>{
    try{    
        const linksEnviados = await pool.query(`SELECT total_links FROM total_links WHERE id = 1`)
        const linksNaoEnviados = await pool.query(`SELECT * FROM nao_enviados`)

        const atualEnviados = linksEnviados.rows[0].total_links
        const atualNaoEnviados = linksNaoEnviados.rowCount
        return res.status(200).send({
            "links_enviados":atualEnviados,
            "links_nao_enviados":atualNaoEnviados
        })
    }catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
})

app.get('/get/dados/pacientes/:dataInicial/:dataFinal', async (req, res) => {
    try {
        const respostas = await pool.query('SELECT atendimento, nota, data_resposta, observacao FROM satisfacao_paciente');
        const atendimentos = await respostas.rows.map(row => row.atendimento);

        const connection = await oracledb.getConnection({
            user: process.env.ORACLE_USER,
            password: process.env.ORACLE_PASSWORD,
            connectString: process.env.ORACLE_CONNECT_STRING
        });

        const dadosInternos = await connection.execute(`
            SELECT ap.nr_atendimento, pf.nm_pessoa_fisica, tasy.obter_dados_pf(ap.cd_pessoa_fisica,'TCD')
            FROM TASY.ATENDIMENTO_PACIENTE ap
            INNER JOIN tasy.pessoa_fisica pf ON pf.cd_pessoa_fisica = ap.cd_pessoa_fisica
            WHERE ap.nr_atendimento IN (${atendimentos.map(a => `${a}`).join(',')})        
        `);


        await connection.close();
        const dadosPacientes = {}; // objeto para armazenar os dados dos pacientes

        // percorre os dados de atendimento, nota e observação
        for (const row of respostas.rows) {
            // procura pelo atendimento correspondente na segunda consulta
            const paciente = dadosInternos.rows.find(d => d[0] === row.atendimento);

            // se encontrar um paciente correspondente, combina os dados
            if (paciente) {
                dadosPacientes[row.atendimento] = {
                atendimento: row.atendimento,
                data: row.data_resposta,
                nota: row.nota,
                comentario: row.observacao,
                nome: paciente[1],
                telefone: paciente[2]
                };
            }
        }

        // converte o objeto para um array e envia a resposta
        res.status(200).json(Object.values(dadosPacientes));
  
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar dados');
    }
  });
  

app.listen(PORT, () => console.log(`listening on port ${PORT}`))