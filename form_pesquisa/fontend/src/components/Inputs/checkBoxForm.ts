import styled from "styled-components";

 export const TagNota =styled.label`
     cursor: pointer;
     
     span{
            color: white;
            font-weight: 600;
            border-radius: 5px;
            padding: 10px;
            transition: all 300ms ease-in-out;
            :hover{
                padding: 13px;
            }
            
        }
    input:checked + span{
        background: #BDBDBD ;
        padding: 15px;
        
    }
`

export const CheckNota =styled.input`
    display: none;
`
