import styled from "styled-components";

export const Cards = styled.div`
    width: 250px;
    height: 120px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        margin-top: 5px;
    }
    #titulo{
        width: 100%;
        text-align: center;
        border: 1px solid #cccccc;
        border-radius: 15px 15px 0 0 ;
        border-top: none;
        border-left: none;
        border-right: none;
    }
    #valor{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
            font-size: 6rem;
            font-weight: bold;
        }
    }
`