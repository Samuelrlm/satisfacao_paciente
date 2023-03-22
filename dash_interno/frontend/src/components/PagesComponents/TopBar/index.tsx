import { ContainerTop, Filtro } from "./styles";
import logo from '../../../images/logo-horizontal.png';
import { InputData } from "../../Inputs/AllInputs";
import { ButtonDataFilter } from "../../Buttons/AllButtons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function TopBar(){
    const navigate = useNavigate()
    const {handleSubmit, reset} = useForm()
    const [data, setData] = useState({
        dataInicial:'',
        dataFinal:''
    })

    async function Filter() {
        if(data.dataInicial ==='' || data.dataFinal ===''){
            alert('Preencha todos os campos')
        }
        else{
            navigate(`/${data.dataInicial}/${data.dataFinal}`);
            location.reload();
        }
    }
    return(
        <ContainerTop>
                <div className="left" id="left">
                    <div className="menu">
                        <div className="icon">
                        <span className="material-symbols-outlined">menu</span>
                        </div>
                    </div>
                    <img src={logo} alt="" width={120}/>
                </div>
                <div className="right" id="right">
                    <Filtro>
                        <form onSubmit={handleSubmit(Filter)}>
                            <div className="inicial" id="inicial">
                                <b>Data inicial:</b>
                                <InputData type={'date'} 
                                onChange={(e) => setData((prev) => ({...prev, dataInicial: e.target.value}))}/>
                            </div>
                            <div className="final" id="final">
                                <b>Data final:</b>
                                <InputData type={'date'} 
                                onChange={(e) => setData((prev) => ({...prev, dataFinal: e.target.value}))}/>
                            </div>
                            <div className="btn">
                                <ButtonDataFilter type={'submit'}>
                                    FILTRAR
                                </ButtonDataFilter>
                            </div>
                        </form>
                    </Filtro>
                </div>
        </ContainerTop>
    )
    
}