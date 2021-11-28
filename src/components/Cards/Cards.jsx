import React from 'react'
import styled from 'styled-components'

const PokeCardComponent = styled.div`

display: block;
width: 341px;
height: 162px;

position: relative;
border-radius: 10px;
background-color: #E8E8E8;

    .pokemon-container{
        width: 225px;
        height: 100%;
        position: absolute;
        left: 130px;
        background-color: #70a83b;
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

        .attak-defense-container{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 130px;

            .attak-defense{
                border-radius: 100%;
                border: 5px solid black;
                width: 46px;
                height: 46px;
                font-size: x-large;
               // margin-bottom: 2px;
    
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .attak{
                display: flex;
                flex-direction: column;
                align-items: center;

                .type{
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    position: absolute;
                    width: 50px;
                    height: 18px;
                    padding: 2px 3px;
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
                }

            }
        }
    }



`


export default function PokeCard(props) {

    return (
        <PokeCardComponent
            colorFirst="#70A83B"
            colorSecond="#A974BC" >
            <div className="pokemon-container">
                <div className="pokemon-image">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
                </div>
            </div>


            <div className="info-container">

                <div className="title">
                    <h1>Bulbassaur</h1>
                </div>

                <div className="attak-defense-container">

                    <div className="attak">
                        <div className="attak-defense">
                            49
                        </div>
                        <p>
                            Attack
                        </p>
                        <div className="type" id='type-1'>
                            <p>
                                Grass
                            </p>
                        </div>
                    </div>

                    <div className="attak">
                        <div className="attak-defense">
                            49
                        </div>
                        <p>Defense</p>
                        <div className="type" id='type-2'>
                            <p>
                                Poison
                            </p>
                        </div>
                    </div>

                </div>




            </div>



        </PokeCardComponent>


    )
}
