import React from 'react';
// style
import { PokedexComponent } from './pokedex-style';

// components
import PokeCard from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';


export default function Pokedex() {
  return (
    <PokedexComponent>
      <div className="home-container">
        <div className="buscar">
          <input type="text" placeholder="buscar" />
        </div>

        <div className="gallery">
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />


        </div>
      </div>

    </PokedexComponent>
  )
}
