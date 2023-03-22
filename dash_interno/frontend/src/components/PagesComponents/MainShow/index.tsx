import AllRegistered from "./AllRegisterd";
import Amostrgem from "./Amostragem";
import ArrayMood from "./ArrayMood";
import MoodPercent from "./MoodPercent";
import { ContainerMainShow } from "./styles";

export default function MainShow(){
    return(
        <ContainerMainShow>
            <MoodPercent/>
            <ArrayMood/>
            <Amostrgem />
            <AllRegistered/>
            <div className="div" style={{marginTop:'3rem', color:'#7D7D7D'}}>
                <p>HOSPITAL SÃO CAMILO - FORTALEZA</p>
            </div>
        </ContainerMainShow>
    )
}