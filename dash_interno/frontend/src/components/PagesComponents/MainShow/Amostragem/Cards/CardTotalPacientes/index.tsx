import { Cards } from "../stylesGlobal";

export default function CardTotalpacientes(){
    return(
        <Cards>
            <div className="titulo" id="titulo">
                <h3>Total de pacientes com alta</h3>
            </div>
            <div className="contaiiner-total" id="valor">
                <p>12</p>
            </div>
        </Cards>
    )
}