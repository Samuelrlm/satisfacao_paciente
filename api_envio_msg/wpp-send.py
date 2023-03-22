import time
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver .common.by import By

load_dotenv()

app = Flask(__name__)

navegador = webdriver.Chrome(executable_path="./chromedriver.exe")
navegador.get("https://web.whatsapp.com")

@app.route('/send/wpp', methods=['POST'])
def send_msg():
    numero_paciente = request.json["numero"]
    atendimento = request.json["atendimento"]

    try:
        navegador.get(f'https://web.whatsapp.com/send?phone={numero_paciente}&text=*Sua%20opinião%20é%20muito%20importante%20para%20nós!*%0A%0AQue%20tal%20avaliar%20o%20nosso%20atendimento?%0A%0Ahttps://satisfacao-paciente.bohr.io/{atendimento}')
        
        while len(navegador.find_elements(By.ID, 'side')) < 1:
            time.sleep(1)
                
        time.sleep(1)
        navegador.find_element(By.XPATH, '//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[2]/button/span').click()
        time.sleep(3)
        
    except Exception as e:
        print('Sem whats')
        return "An error occurred", 500
    print('tem whats')
    return "Success", 200


CORS(app)
# Inicie a aplicação
if __name__ == "__main__":
    app.run(host='0.0.0.0', port= 3030)