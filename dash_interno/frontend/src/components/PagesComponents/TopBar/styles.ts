import styled from "styled-components";

export const ContainerTop = styled.div`
    width: 100%;
    height: 50px;
    background: #ffffff;
    display: flex;
    align-items: center;
    img{
        margin-left: 1rem;
    }
    #left{
        margin-left: 1rem;
        width: 30%;
        display: flex;
        align-items: center;
        span{
            font-weight: 800;
            font-size: 2.3rem;
            cursor: pointer;
            color: #353535;
        }
    }
    #right{
        width: 70%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        margin-right: 2rem;
    }
`

export const Filtro = styled.div`
    display: flex;
    flex-direction: row;
    form{
        display: flex;
        gap: 1rem;
        #inicial{
            align-items: center;
            gap: 8px;
            display: flex;
        }
        #final{
            gap: 8px;
            align-items: center;
            display: flex;
        }
    }
`