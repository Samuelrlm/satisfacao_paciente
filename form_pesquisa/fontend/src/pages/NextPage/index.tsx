import { BackgroundNext } from "../../components/General/background/backgroundNext";
import { Agradecimento, Footer, Formato } from "./styles";
import SVG from "../..//Images/health-professional-team-animate.svg"


export default function NextPage(){
    return(
        <BackgroundNext>
            <Formato>
                <div id="logo" className="logo">
                    <img src="https://saocamilofortaleza.org.br/wp-content/uploads/2021/06/logo4.png" width={200}/>
                </div>
                <div className="svg">
                    <img id="svg" src="https://svgshare.com/i/qz6.svg" alt="svg" width={400}/>
                </div>
                <Agradecimento>
                    <p>
                        <div id="ngrt" className="ngrt">
                            <b>Obrigado por compartilhar sua experiência conosco!</b><br/> <br/>
                        </div>
                        Sua avaliação é muito importante e nos ajuda a garantir que estamos sempre oferecendo o melhor atendimento possível. <br/> <br/>
                        <div id="ngrt" className="ngrt">
                            <p>Obrigado por escolher nossos serviços.</p>
                        </div>
                    </p>
                </Agradecimento>
                <Footer>
                    <img src="https://i.imgur.com/xGD3YUz.png" alt="" width={100} />
                </Footer>
            </Formato>
        </BackgroundNext>
    )
}
