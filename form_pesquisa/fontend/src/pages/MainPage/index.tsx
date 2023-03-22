import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Background } from "../../components/General/background/background";
import { ButtonSubmit } from "../../components/General/buttons/buttonSubmit";
import { CheckNota, TagNota} from "../../components/Inputs/checkBoxForm";
import api from "../../services/api";
import { Avaliacao, Botoes, CardBody, CardFooter, CardHeader, CardMain, Dados} from "./style";
import Logo from "../..//Images/logo-horizontal.png";

export function MainPage(){
    const {atend} = useParams()
    const navigate =  useNavigate()
    const today = new Date().toISOString().slice(0, 10);

     const notas = [
         {valor: 0, color:'#e94212', iconName:'sentiment_dissatisfied', idIcon: 'bad'},
         {valor: 1, color:'#ed5e0e', iconName:'', idIcon: ''},
         {valor: 2, color:'#f27a0b', iconName:'', idIcon: ''},
         {valor: 3, color:'#f79507', iconName:'', idIcon: ''},
         {valor: 4, color:'#fbb003', iconName:'', idIcon: ''},
         {valor: 5, color:'#fdc900', iconName:'', idIcon: ''},
         {valor: 6, color:'#d4c30e', iconName:'', idIcon: ''},
         {valor: 7, color:'#aaba18', iconName:'', idIcon: ''},
         {valor: 8, color:'#80b326', iconName:'', idIcon: ''},
         {valor: 9, color:'#57ab32', iconName:'', idIcon: ''},
         {valor: 10, color:'#29a440', iconName:'sentiment_satisfied', idIcon: 'happy'},
     ]
    const [inputsValues, setInputValues] = useState({
        nota: "",
        detalhes:""
    })

    const { register,handleSubmit, reset} = useForm()
    
    async function RegisterInfo (){
        if(inputsValues.nota === ""){
            toast.error("Informe um nota de avaliação!")
        }
        else{
            console.log({
                nota:inputsValues.nota,
                    obs:inputsValues.detalhes,
                    atend:`${atend}`,
                    data:today
            })
            try{
                const response = await api.post("/post/register", {
                    nota:inputsValues.nota,
                    obs:inputsValues.detalhes,
                    atend:`${atend}`,
                    data:today
                 })

                 toast.success("Avaliação cadastrada com sucesso!")
                 reset()
                 navigate('/next-page')
            }
            catch(err: any){
                if(err.request.status === 404){
                    console.log(err)
                    toast.error("Você já avaliou esse atendimento!")
                }
                else{
                    console.log(err)
                    toast.error("Erro ao cadastrar avaliação!")
                }
            }
        }
    }
    return(
        <Background>
            <CardMain>
                <form onSubmit={handleSubmit(RegisterInfo)}>
                    <CardHeader>
                        <img src="https://saocamilofortaleza.org.br/wp-content/uploads/2021/06/logo4.png" alt="" />
                        <h2>Pesquisa de satisfação Hospital São Camilo</h2>
                    </CardHeader>
                    <CardBody>
                        
                        <Avaliacao>
                            <p><b>De 0 a 10 como você avalia o nosso atendimento?</b></p>
                            <Botoes>
                                <table>
                                    <thead>
                                        <tr>
                                            {notas.map((nota) => {
                                                
                                                return (
                                                    <th key={nota.valor}>
                                                    <TagNota htmlFor={`${nota.valor}`}>
                                                        <CheckNota
                                                            type="checkbox"
                                                            id={`${nota.valor}`}
                                                            value={nota.valor}
                                                            checked={inputsValues.nota === `${nota.valor}`}
                                                            onChange={(e) => setInputValues((prev) => ({ ...prev, nota: e.target.value }))}/>
                                                        <span
                                                            style={{ background:`${nota.color}`}}
                                                            id={`${nota.valor}`}
                                                            className={inputsValues.nota === `${nota.valor}` ? "selected" : ""}>
                                                            {nota.valor}
                                                        </span>
                                                    </TagNota>
                                                    </th>
                                                );
                                                })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {notas.map((icon) =>{
                                                return(
                                                    <td>
                                                        <span id={`${icon.idIcon}`} className="material-symbols-outlined">
                                                            {icon.iconName}
                                                        </span>
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    </tbody>
                                </table>
                            </Botoes>
                        </Avaliacao>
                    </CardBody>
                    <CardFooter>
                        <p>Se desejar, deixe uma mensagem relatando a sua experiência.</p>
                        <textarea id="texto-paciente" 
                            value={inputsValues.detalhes} 
                            onChange={ e => setInputValues((prev) => ({...prev, detalhes: e.target.value}))}/>
                        <div className="buton" id="btn">
                            <ButtonSubmit type="submit">
                                ENVIAR
                            </ButtonSubmit>
                        </div>
                        <div id="espaco"></div>
                    </CardFooter>
                </form>
            </CardMain>
        </Background>
    )
}
