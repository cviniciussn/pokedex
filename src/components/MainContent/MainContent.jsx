import React from 'react';
import styled from 'styled-components';

import banner from '../../img/home-banner.svg';

const MainComponent = styled.main`
width: 100%;
background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);

display: flex;
    .home-content {
        width: calc(100% - 240px);
        padding: 128px 0 128px 120px;

        .title {
            font-size: 48px;
            font-weight: normal;
            letter-spacing: 4px;

            > span {
                font-weight: bold;
            }
        }

        > p {
            margin: 64px 0;
            font-size: 22px;
            line-height: 32px;
        }

        .btn-pokemons {
            > a {
                padding: 20px 36px;
                width: 230px;

                background: #73D677;
                box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
                border-radius: 11px;
                color: #000;

                font-weight: bold;
                text-decoration: none;
         
                display: flex;
                justify-content: center;
                align-items: center;
                transition: .4s;

                &:hover {
                    filter: brightness(1.2);
                }
            }
        }
    }

    .home-image {
        > img {
            display: block;
            width: 100%;
            height: 100%;
            max-width: 100%
        }
    }
`;

const MainContent = () => {
    return (
        <MainComponent>
            <div className="home-content">
                <h2 className="title">
                    <span>Encontre</span> todos <br /> os seus pokemons <br /><span>favoritos</span>
                </h2>

                <p>
                    Você pode saber o tipo de Pokemon,<br /> seus pontos fortes, desvantagens e habilidades
                </p>

                <div className="btn-pokemons">
                    <a href="/pokedex">Ver Pokemons</a>
                </div>
            </div>

            <div className="home-image">
                <img src={banner} alt="Imagem Home" />
            </div>
        </MainComponent>
    )
}

export default MainContent;
