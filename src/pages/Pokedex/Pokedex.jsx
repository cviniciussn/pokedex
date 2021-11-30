import React, { useEffect, useState } from 'react'
import { PokedexComponent } from './pokedex-style'
import PokeCard from '../../components/Cards/Cards'

import Header from '../../components/Header/Header';
import { useData } from '../../contexts/GeneralContexts';


export default function Home() {

  const [pokemonData, setPokemonData] = useState([])

  const data = useData()
  const loading = data.loading
  const getPage = data.getPage
  //const pokemonData = data.pokemonData


  async function handleData() {
    let data = localStorage.getItem("pokemonData")
    data = JSON.parse(data)
    await getPage(5).then(
      setPokemonData(data)
    )

  }

  useEffect(() => {
    handleData()
  }, [])


  return (<>
    <Header></Header>
    <PokedexComponent>
      <div className="home-container">
        <div className="buscar">
          <input type="text" placeholder="buscar" />
        </div>

        <div className="gallery">
          {
            loading ? <h1> Loading </h1> :
              pokemonData?.map(
                pokemon => {
                  console.log(pokemon.type_second)
                  return (<PokeCard
                    key={pokemon.name}
                    name={pokemon.name}
                    pic={pokemon.pic}
                    attak={pokemon.attak}
                    defense={pokemon.defense}
                    type_first={pokemon.type_first}
                    type_second={pokemon.type_second}
                  />)

                }
              )}
        </div>
      </div>

    </PokedexComponent>
  </>
  )

}
