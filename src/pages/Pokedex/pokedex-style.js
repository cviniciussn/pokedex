import styled from "styled-components"
import { keyframes } from "styled-components"

const entrance = keyframes`
 0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    opacity: 1;
  }`

const PokedexComponent = styled.div`

    width: 100vw;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation-name: ${entrance};
    animation-duration: .5s;




   //background-color: blue;


    .header{
        height: 73px;
        width: 100%;
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        background-color: #F5DB13;
        .logo{
            height: 63px;
            width: 157px;

            >img {
                height: 100%;
                width: 100%;
            }
        }
    }

    .home-container{
        position: absolute;
        top: 2vh;
        padding: 20px;
       // bottom: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 90%;
        flex-grow: 1;
        margin-top: 20px;

       // border: 2px solid red;


        .buscar{
            width: 70vw;
            height: 53px;
            margin-bottom: 50px;

            background-color: #cdcdcd;
            border-radius: 10px;
            
            > input{
                width: 100%;
                height: 100%;
                background-color: #cdcdcd;
                font-size: 32px;
                border-radius: 10px;

            }
        }

        .pagination{
            padding: 15px;
        }

        .gallery{
            height: 100%;
            width: 80vw;

            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-evenly;
            gap: 20px;
        }
    }


`

export {
    PokedexComponent,
}