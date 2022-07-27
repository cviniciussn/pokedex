import styled from 'styled-components'
import { keyframes } from "styled-components"

const flip = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  
`
const PokeCardComponent = styled.div`

display: block;
width: 341px;
height: 200px;

position: relative;
border-radius: 10px;
background-color: #E8E8E8;

animation-name: ${flip};
animation-duration: 1s;

&:hover{
    box-shadow: 5px 5px 5px 5px ${props => props.colorFirst}; 
    transition: all .5s;
    cursor: pointer;
    transform: scale(1.1);
}
&:not(:hover){
    transition: all .5s;

}

    .pokemon-container{
        width: 225px;
        height: 100%;
        position: absolute;
        left: 130px;
        background-color: ${props => props.colorFirst}; 
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;


        .pokemon-image{
            margin: 16px 18px 16px 63px;
            width: 144px;
            height: 132px;
    

            > img{
                width: 100%;
                height: 100%;
            }
        }
    }

    .info-container{
        position: absolute;
        display: block;
        z-index: 10;

        margin-top: 8px;
        margin-left: 15px;

        .title{
            //margin-bottom: 5px;
        }

        .attack-defense-container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 130px;

            .attack-defense{
                border-radius: 100%;
                border: 5px solid rgb(40,42,53);
                width: 55px;
                height: 55px;
                font-size: x-large;
               // margin-bottom: 2px;
    
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .attack{
                display: flex;
                flex-direction: column;
                align-items: center;

                .type{
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    position: absolute;
                    //width: 50px;
                    width: max-content;
                    height: fit-content;
                    padding: 5px;
                    text-align: center;
                    border-radius: 8px;

                    margin-top: 80px;
                }

                #type-1{
                    background-color: ${props => props.colorFirst};
                  //  box-shadow: inset 1px 1px 5px ${props => props.colorFirst} ;

                }

                #type-2{
                    background-color: ${props => props.colorSecond};
                    display: ${props => props.second || "block"};
                }

            }
        }
    }

`


export {
    PokeCardComponent,
}