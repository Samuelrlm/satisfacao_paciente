import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CardContador, CardMood, ContainerMoodArray, FundoNota } from "./styles"

export default function ArrayMood(){
    const [allNotas, setAllNotas] = useState([])
    const {dataInicial, dataFinal} = useParams()  
    const avaliacoes = [
        {id: 0, fundo: "#e5786a", emoji: "sentiment_dissatisfied"},
        {id: 1, fundo: "#e5786a", emoji: "sentiment_dissatisfied"},
        {id: 2, fundo: "#e5786a", emoji: "sentiment_dissatisfied"},
        {id: 3, fundo: "#e5786a", emoji: "sentiment_dissatisfied"},
        {id: 4, fundo: "#e5786a", emoji: "sentiment_dissatisfied"},
        {id: 5, fundo: "#e5786a", emoji: "sentiment_dissatisfied"},
        {id: 6, fundo: "#e5786a", emoji: "sentiment_dissatisfied"},
        {id: 7, fundo: "#e3c025", emoji: "sentiment_neutral"},
        {id: 8, fundo: "#e3c025", emoji: "sentiment_neutral"},
        {id: 9, fundo: "#64bc6e", emoji: "sentiment_satisfied"},
        {id: 10, fundo: "#64bc6e", emoji: "sentiment_satisfied"}
    ]

    async function getNotas() {
        try{
            await fetch(`http://10.10.0.200:4002/get/grupo/notas/${dataInicial}/${dataFinal}`)
            .then(response => response.json())
            .then(data => {
                setAllNotas(data)
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

    useEffect(() =>{
        getNotas().then((res)=> res)
    })

    return(
        <ContainerMoodArray>
            <table>
                <thead>
                    <tr>
                        {allNotas.map((contador) => {
                            let cor
                            if(contador.nota >= 0 && contador.nota <=6){
                                cor = '#e5786a'
                            } else if (contador.nota >= 7 && contador.nota <= 8){
                                cor = '#e3c025'
                            } else if (contador.nota >= 9){
                                cor = '#64bc6e'
                            }
                            return (
                                <th>
                                    <CardContador>
                                        <div className="fundoCont" id="fundo">
                                            <span style={{color: cor}}>{contador.quantidade}</span>
                                        </div>
                                    </CardContador>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {avaliacoes.map((mood) => {
                            return(
                                <td>
                                    <CardMood style={{background: mood.fundo}}>
                                        <span className="material-symbols-outlined">{mood.emoji}</span>
                                    </CardMood>
                                </td>
                            )
                        })}
                    </tr>
                    <tr>
                        {avaliacoes.map((nota) =>{
                            return(
                                <td>
                                    <FundoNota>
                                        <p>{nota.id}</p>
                                    </FundoNota>
                                </td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        </ContainerMoodArray>
    )
}