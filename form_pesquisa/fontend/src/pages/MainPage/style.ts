import styled from "styled-components";

export const CardMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 14px;
    width: 60%;
    padding: 15px;
    margin: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    form{
        width: 90%
    }
    @media (max-width: 600px) {
        width: 97%;
    }
`

export const Dados = styled.div`
    display: flex;
    flex-direction: column;
    gap:3rem;
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: column ;
    align-items:center ;
    gap: 1rem;
    h2{
        margin-bottom: 1rem;
        text-align: center;
    }

`

export const CardBody = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CardFooter = styled.div`
    margin-top: 1rem;
    textarea{
        margin-top: 1rem;
        width: 100%;
        height: 150px;
        border-radius: 5px;
        border: none;
        padding: 10px;
        border: 1px solid #C6C6C6;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        resize: none;
    }
    #btn{
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: center;
        margin-top: 2rem
    }
    #espaco{
        margin-bottom: 2rem;
    }
`

export const Avaliacao = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    P{
        margin-bottom: 1rem;
    }
`

export const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
    label{
        margin-left: 5px;
    }
    margin-bottom: 1rem;
    #bad{
        color: #B45B09;
        margin-left: 5px;
        margin-top: 10px;
        font-size: 30px;
    }
    #happy{
        color: #008000;
        margin-left: 9px;
        margin-top: 10px;
        font-size: 30px;
    }

    @media (max-width: 600px) {
        label{
            margin-left: 0;
        }
        #bad{
            margin-left: 0px;
        }
        #happy{
            margin-left: 5px;
        }
    }
`
