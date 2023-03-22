import { BackgroundMain } from "../../components/Backgrounds/backgroundMain";
import MainShow from "../../components/PagesComponents/MainShow";
import TopBar from "../../components/PagesComponents/TopBar";


export default function MainPage(){
    return(
        <BackgroundMain>
            <TopBar/>
            <MainShow/>
        </BackgroundMain>
    )
}