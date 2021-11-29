import React from 'react'
import { PokedexComponent } from './pokedex-style'
import PokeCard from '../../components/Cards/Cards'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


export default function Home() {
  return (<>
    <Header></Header>
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
    <Footer></Footer>
  </>
  )

}
