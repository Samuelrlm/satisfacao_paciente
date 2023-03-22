import { Cards } from "../stylesGlobal";

export default function CardLinksEnviados(){
    return(
        <Cards>
            <div className="titulo" id="titulo">
                <h3>Total de Links enviados</h3>
            </div>
            <div className="contaiiner-total" id="valor">
                <p>12</p>
            </div>
        </Cards>
    )
}