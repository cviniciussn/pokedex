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
      onClick={_ => { setModal(true) }}
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

        <div className="attak-defense-container">

          <div className="attak">
            <div className="attak-defense">
              {props.attak}
            </div>
            <p>
              Attack
            </p>
            <div className="type" id='type-1'>
              {props.type_first}
            </div>
          </div>

          <div className="attak">
            <div className="attak-defense">
              {props.defense}
            </div>
            <p>Defense</p>
            <div className="type" id='type-2'>
              {props.type_second}
            </div>
          </div>
        </div>
      </div>

    </PokeCardComponent>

  )
}
