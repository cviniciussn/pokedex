import React from 'react';

// style
import { MainComponent } from './main-style.js'
import banner from '../../img/home-banner.svg';

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
        </div>            </div>

      <div className="home-image">
        <img src={banner} alt="Imagem Home" />
      </div>
    </MainComponent>
  )
}

export default MainContent;
