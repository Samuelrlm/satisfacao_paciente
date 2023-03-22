import styled from "styled-components";

export const Formato = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    background: #ffffff;
    border-radius: 12px;
    height: 97%;
    #logo{
        margin-top: 1rem;
    }
    @media (max-width: 600px) {
        width: 96%;
        #svg{
            width: 350px
        }
    }
`

export const Agradecimento = styled.div`
    width: 60%;
    #ngrt{
        text-align: center;
    }
    
    @media (max-width: 600px) {
        width: 95%;
        text-align: center;
    }
`

export const Footer = styled.div`
    margin-top: 6px;
    @media (max-width: 600px){
        margin-top: 2rem;
    }
`