import styled from "styled-components";

const PokedexComponent = styled.div`

    width: 100vw;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


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
        top: 15vh;
        bottom: 0;

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