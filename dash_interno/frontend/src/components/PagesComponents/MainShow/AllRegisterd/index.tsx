import { ContainerHistorico} from "./styles";
import TableHistory from "./TableHistory";

export default function AllRegistered(){
    return(
        <ContainerHistorico>
            <div className="title">
                <h2>Historico de avaliações</h2>
            </div>
            <TableHistory/>
        </ContainerHistorico>
    )
}