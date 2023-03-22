import styled from "styled-components"

export const Faces = styled.div`
    display: flex;
    width: 80%;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
    #mood{
        background: #FFFFFF;
        width: 250px;
        height: 210px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        :hover{
            box-shadow: none;
            cursor: pointer;
        }
            #bad{
                background: #e5786a;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius:5px;
                width: 100%;
                height: 80%;
            }
            #neutral{
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius:5px;
                width: 100%;
                height: 80%;
                background: #e3c025;
            }
            #good{
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius:5px;
                width: 100%;
                height: 80%;
                background: #64bc6e;
            }
            span{
                font-size: 10rem;
                color: #fdfbfb;
            }
            #percent{
                width: 100%;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                p{
                    margin-top: 5px;
                    font-size: 34px;
                    font-weight: 600;
                }
            }
    }

`