import styled from "styled-components";


export const ContainerInput = styled.div`
    width: 100%;
    position: relative;
    label{
        font-size: 16px;
        position: absolute;
        left: 5px;
        bottom: 28px;
        background: #ffffff;
        border-radius: 10px;
        b{
            color: red;
        }
    }
`

export const InputStyleForm = styled.input`
    border: 1px solid red;
    border-top:none;
    border-left: none;
    border-right: none;
    padding: 9px;
    outline: none;
    width: 100%;
    transition: all 350ms ease-in-out;
    :hover{
        font-size: medium;
    }
    :focus{
        font-size: medium;
    }
`