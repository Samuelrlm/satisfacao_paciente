import styled from "styled-components";

export const ButtonSubmit = styled.button`
    width: 250px;
    background: #E50000;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;
    :hover{
        background: #FF4C4C;
    }
    @media (max-width: 600px){
        font-size: medium;
    }
` 