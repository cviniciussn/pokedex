import React from 'react'
import { PokeCardComponent } from './cards-style'


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
