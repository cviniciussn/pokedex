import React from 'react'
import { PokeCardComponent } from './cards-style'
import { useData } from '../../contexts/GeneralContexts'
import { handleCardBackground, handleBadge } from '../../styles/handleColors'

export default function PokeCard(props) {
  const { setModal } = useData()

  const backgroundColor = handleCardBackground(props.type_first)
  const displayBadge = handleBadge(props.type_second)

  return (
    <PokeCardComponent
      colorFirst={backgroundColor}
      colorSecond="#A974BC"
      second={displayBadge}
      onClick={_ => { setModal(props) }}
    >

      <div className="pokemon-container">
        <div className="pokemon-image">
          <img src={props.pic} alt="" />
        </div>
      </div>

      <div className="info-container">
        <div className="title">
          <h1>{props.name}</h1>
        </div>

        <div className="attack-defense-container">

          <div className="attack">
            <div className="attack-defense">
              {props.attack}
            </div>
            <p>
              Ataque
            </p>
            <div className="type" id='type-1'>
              {props.type_first}
            </div>
          </div>

          <div className="attack">
            <div className="attack-defense">
              {props.defense}
            </div>
            <p>Defesa</p>
            <div className="type" id='type-2'>
              {props.type_second}
            </div>
          </div>
        </div>
      </div>

    </PokeCardComponent>

  )
}
