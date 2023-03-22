import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../stylesGlobal";

export default function CardTotalRespostas(){
    const [respostas, setRespostas] = useState([])
    const {dataInicial, dataFinal} = useParams()
    async function GetLinks() {
        try{
            await fetch(`http://10.10.0.200:4002/get/percent/mood/${dataInicial}/${dataFinal}`)
            .then(response => response.json())
            .then(data => {
                setRespostas(data)
            })
        }
        catch(status:any){
            const erro = status.request.status
            const request = status.request
           
            console.log('ERRO:',erro)
            console.log(request)

            if(erro === 500 || erro === 0){
                alert(status)
            }
        }
    }

    useEffect(() => {
        GetLinks().then((res) => res)
    },[])

    const Amostra = respostas.total_notas
    return(
        <Cards>
            <div className="titulo" id="titulo">
                <h3>Total de respostas</h3>
            </div>
            <div className="contaiiner-total" id="valor">
                <p>{Amostra}</p>
            </div>
        </Cards>
    )
}