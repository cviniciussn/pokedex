import React from 'react'
import { HomeComponent } from './home-style'
import PokeCard from '../../components/Cards/Cards'
import logo from '../../img/logo.svg'



export default function Home() {
  return (
    <HomeComponent>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logomarca" />
        </div>

        <div className="menus">
          <p>Pokedex</p>
          <p>Legendarios</p>
        </div>
      </div>

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

    </HomeComponent>
  )
}
