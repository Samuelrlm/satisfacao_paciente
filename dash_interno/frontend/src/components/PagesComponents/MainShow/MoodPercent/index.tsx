import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Faces } from "./styles";

export default function MoodPercent(){
    const [moodPercent, setMoodPercent] = useState([])
    const {dataInicial, dataFinal} = useParams() 

    async function getData() {
        try{
            await fetch(`http://10.10.0.200:4002/get/percent/mood/${dataInicial}/${dataFinal}`)
            .then(response => response.json())
            .then(data => {
                setMoodPercent(data)
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
        getData().then((res) => res)
    },[])

    const vermelhasStr = moodPercent.percent_notas_vermelhas
    const vermelhasNr = Number(vermelhasStr)
    const vermelhaFinal = vermelhasNr.toFixed(2)
    const verdesStr = moodPercent.percent_notas_verdes
    const verdesNr = Number(verdesStr)
    const verdesFinal = verdesNr.toFixed(2)
    const amarelasStr = moodPercent.percent_notas_amarelas
    const amarelasNr = Number(amarelasStr)
    const amarelasFinal = amarelasNr.toFixed(2)


    return(
            <Faces>
                <div className="mood-bad" id="mood">
                     <div className="face" id="bad">
                        <span className="material-symbols-outlined">sentiment_dissatisfied</span>
                    </div>
                    <div className="percent" id="percent">
                        <p>{vermelhaFinal}%</p>
                    </div>
                </div>
                <div className="mood-neutral" id="mood">
                    <div className="face" id="neutral">
                        <span className="material-symbols-outlined">sentiment_neutral</span>
                    </div>
                    <div className="percent" id="percent">
                        <p>{amarelasFinal}%</p>
                    </div>
                </div>
                <div className="mood-happy" id="mood">
                    <div className="face" id="good">
                        <span className="material-symbols-outlined">sentiment_satisfied</span>
                    </div>
                    <div className="percent" id="percent">
                        <p>{verdesFinal}%</p>
                    </div>  
                </div>
            </Faces>
    )
}