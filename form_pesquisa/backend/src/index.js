const express = require('express') 
const { Pool } = require('pg')
require('dotenv').config()
const cors = require('cors')

const PORT = process.env.PORT || 4002

const pool = new Pool({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.USER_DB,
    password: process.env.PASS_DB,
    port: process.env.PORT_DB,
})

const app = express()

app.use(express.json())
app.use(cors())

app.post('/post/register', async (req, res) => {
    const {
        nota,
        obs,
        atend,
        data
    } = req.body
    
    try{
        const consultarRegistro = await pool.query(`
            SELECT *
            FROM satisfacao_paciente 
            WHERE atendimento = ${atend}
        `)
        if(consultarRegistro.rowCount >= 1){
            return res.status(400).send('Atendimento já cadastrado!')
        }
        else{
            const newRegistration = await pool.query(`
            INSERT INTO satisfacao_paciente (data_resposta, atendimento, nota, observacao)
            VALUES ('${data}',${atend}, ${nota}, '${obs}')`)
            return res.status(200).send('Registro realizado!')
        }
        
    }catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
})

app.get('/docker', async (req,  res) =>{
    return res.status(200).send('Docker')
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))