import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContainerTable, LinkTo} from "./styles";

export default function TableHistory(){
    const [registros, setRegistros] = useState([])
    const {dataIncial, dataFinal} = useParams()
    async function getRegistros() {
        try{
            await fetch(`http://10.10.0.200:4002/get/dados/pacientes/${dataIncial}/${dataFinal}`)
            .then(response => response.json())
            .then(data => {
                setRegistros(data)
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
        getRegistros().then((res)=> res)
    })
    return(
        <>
            <LinkTo>
                <Link to="/">
                    <p>Ver todos</p>
                </Link>
            </LinkTo>
            <ContainerTable>
                        <table>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Atendimenro</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Avaliação</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registros.map((reg) =>{
                                    let emoji:any
                                    let color:any
                                    if(reg.nota >= 0 && reg.nota <=6 ){
                                        emoji = 'sentiment_dissatisfied'
                                        color = '#e5786a'
                                    }
                                    if(reg.nota >= 7 && reg.nota <= 8){
                                        emoji = 'sentiment_neutral'
                                        color = '#e3c025'

                                    }
                                    if(reg.nota >= 9 && reg.nota <= 10){
                                        emoji = 'sentiment_satisfied'
                                        color = '#64bc6e'
                                    }
                                        return(
                                            <tr>
                                                <td>{reg.data}</td>
                                                <td>{reg.atendimento}</td>
                                                <td>{reg.nome}</td>
                                                <td>{reg.telefone}</td>
                                                <td>{reg.nota}</td>
                                                <td>
                                                    <span className="material-symbols-outlined" style={{background: color, borderRadius:"50%"}}>{emoji}</span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                </ContainerTable>
        </>
    )
}