import styled from "styled-components";

export const LinkTo = styled.div`
    width: 95%;
    display: flex;
    justify-content: flex-end;
`

export const ContainerTable = styled.div`
  width: 97%;
  border-radius: 10px;
  background: white;
  margin-top: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  overflow: auto; /* Permitir rolagem no elemento principal */
  table {
    width: 100%;
    text-align: center;
    position: relative;
    border-collapse: collapse;
  }
  thead {
    position: sticky;
    top: 0;
    background-color: #f2f2f2;
    tr{
        th{
            padding: 3px;
        }
    }
  }
  tbody {
    max-height: 350px;
    overflow-y: scroll;
    background: #e1e1e1;
    tr{
        td{
            padding: 3px;
        }
        cursor: pointer;
        border-bottom: 1px solid #929292;
        &:last-child{
            border-bottom: none;
        }
        :hover{
            background: #ffffff;
        }
    }
  }
`;

export const Table = styled.div`
    width: 100%;
    background: gray;
    height:100% ;
    
`