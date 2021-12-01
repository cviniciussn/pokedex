import React from 'react'
import { PokeCardComponent } from './cards-style'


export default function PokeCard(props) {

  let backgroundColor = ""

  const colors = {
    fire: "#F76545",
    water: "#356c94",
    grass: "#70A83B",
    rock: "#A1A1A1",
    poison: "#A974BC",
    ground: "#9B897B",
    eletric: "#F7C545",
    normal: "#76AADB"
  }

  if (props.type_first === "stile" || props.type_first === "dark" || props.type_first === "rock") {
    backgroundColor = colors.rock
  } else if (
    props.type_first === "grass" || props.type_first === "bug"
  ) {
    backgroundColor = colors.grass
  } else if (props.type_first === "ice" || props.type_first === "water") {
    backgroundColor = colors.water
  } else if (props.type_first === "fire" || props.type_first === "fighting" || props.type_first === "dragon") {
    backgroundColor = colors.fire
  } else if (props.type_first === "normal" || props.type_first === "gosth") {
    backgroundColor = colors.normal
  } else if (props.type_first === "poison" || props.type_first === "psychic" || props.type_first === "fairy" || props.type_first === "ghost") {
    backgroundColor = colors.poison
  } else if (props.type_first === "ground") {
    backgroundColor = colors.ground
  } else if (props.type_first === "electric") {
    backgroundColor = colors.eletric
  }

  let displayBadge
  if (props.type_second === undefined) { displayBadge = "none" }

  return (
    <PokeCardComponent
      colorFirst={backgroundColor}
      colorSecond="#A974BC"
      second={displayBadge}
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
