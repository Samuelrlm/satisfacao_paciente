import styled from "styled-components";

export const ContainerMoodArray = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardContador = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    #fundo{
        background: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const CardMood = styled.div`
    cursor: pointer;
    border-radius: 5px;
    width: 65px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    :hover{
        box-shadow:none;
    }
    span{
        color: #fdfbfb;
        font-size: 2.5rem;
    }
`

export const FundoNota = styled.div`
   width: 90%;
   height: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 600;
`