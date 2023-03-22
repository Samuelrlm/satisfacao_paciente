import CardLinksEnviados from "./Cards/CardLinksEnviados";
import CardTotalRespostas from "./Cards/CardLinksRespondidos";
import CardSemWpp from "./Cards/CardPacientesSemWpp";
import CardTotalpacientes from "./Cards/CardTotalPacientes";
import { ContainerCards } from "./styles";

export default function Amostrgem(){
    return(
        <ContainerCards>
            <CardTotalpacientes/>
            <CardLinksEnviados />
            <CardTotalRespostas />
            <CardSemWpp />
        </ContainerCards>
    )
}