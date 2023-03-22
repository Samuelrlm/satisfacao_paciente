import { Cards } from "../stylesGlobal";

export default function CardSemWpp(){
    return(
        <Cards>
            <div className="titulo" id="titulo">
                <h3>Não possuem WhatsApp</h3>
            </div>
            <div className="contaiiner-total" id="valor">
                <p>0</p>
            </div>
        </Cards>
    )
}