import cx_Oracle
import time
import requests

dsn_tns = cx_Oracle.makedsn(IP_BANCO, PORTA, service_name=SDI_BANCO)
connection = cx_Oracle.connect(user=USER_DB, password=SENHA_DB, dsn=dsn_tns)

# Criação do cursor
cursor = connection.cursor()

# Execução da consulta para obter a última linha da tabela a ser monitorada
cursor.execute("SELECT * FROM (SELECT aah.nr_atendimento,  TASY.OBTER_DADOS_PF(PF.cd_pessoa_fisica, 'TCI') FROM TASY.ATEND_ALTA_HIST AAH INNER JOIN TASY.ATENDIMENTO_PACIENTE AP ON AAH.NR_ATENDIMENTO = AP.NR_ATENDIMENTO INNER JOIN TASY.PESSOA_FISICA PF ON AP.CD_PESSOA_FISICA = PF.CD_PESSOA_FISICA WHERE AAH.IE_ALTA_ESTORNO = 'A' order by aah.nr_sequencia desc) WHERE ROWNUM = 1")

# Armazenamento da última linha da tabela em uma variável
ultima_linha = cursor.fetchone()

# Loop infinito para monitorar a tabela em tempo real
while True:
    # Execução da consulta para obter a última linha da tabela a ser monitorada
    cursor.execute("SELECT * FROM (SELECT aah.nr_atendimento,  TASY.OBTER_DADOS_PF(PF.cd_pessoa_fisica, 'TCI') FROM TASY.ATEND_ALTA_HIST AAH INNER JOIN TASY.ATENDIMENTO_PACIENTE AP ON AAH.NR_ATENDIMENTO = AP.NR_ATENDIMENTO INNER JOIN TASY.PESSOA_FISICA PF ON AP.CD_PESSOA_FISICA = PF.CD_PESSOA_FISICA WHERE AAH.IE_ALTA_ESTORNO = 'A' order by aah.nr_sequencia desc) WHERE ROWNUM = 1")

    # Armazenamento da última linha da tabela em uma variável
    nova_linha = cursor.fetchone()

    # Compara a nova linha com a última linha armazenada
    if nova_linha != ultima_linha:
        # Separa o número de atendimento e o número de telefone
        nr_atendimento = nova_linha[0]
        nr_telefone = nova_linha[1]
        telefone = f"+{nr_telefone}"
        print(telefone)

        # Cria o dicionário com os dados a serem enviados para a API
        dados = {"numero": f"{telefone}", "atendimento":f"{nr_atendimento}"}

        # Envia a mensagem para a API
        response = requests.post('http://10.10.0.200:3030/send/wpp', json=dados)

        # Exibe a nova linha inserida
        print(nova_linha)

        # Atualiza a última linha armazenada
        ultima_linha = nova_linha
    else:
        # Exibe mensagem de que não houve alterações
        print("Não houve alterações.")

    time.sleep(1.5) # Aguarda 1.5 segundo antes de verificar novamente

# Fechamento do cursor e da conexão
cursor.close()
connection.close()
