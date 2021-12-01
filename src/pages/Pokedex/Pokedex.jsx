import React, { useEffect, useState } from 'react'
import { PokedexComponent } from './pokedex-style'
import PokeCard from '../../components/Cards/Cards'
import Pagination from '@mui/material/Pagination'


import Header from '../../components/Header/Header';
import { useData } from '../../contexts/GeneralContexts';

import Loading from '../Loading/Loading';


export default function Home() {

  const [pokemonData, setPokemonData] = useState([])
  const [currentPage, setPage] = useState(1)

  const data = useData()
  const getPage = data.getPokemons
  let loading = data.loading
  //const pokemonData = data.pokemonData


  async function handleData() {
    await getPage(currentPage)
    let data = localStorage.getItem("pokemonData")
    data = JSON.parse(data)
    setPokemonData(data)
  }

  useEffect(() => {
    handleData()
  }, [currentPage])


  return (<>
    <Header></Header>
    <PokedexComponent>
      <div className="home-container">
        <div className="buscar">
          <input type="text" placeholder="buscar" />
        </div>


        <div className="pagination">
          <Pagination
            defaultPage={1}
            page={currentPage}
            onChange={(event, value) => setPage(value)}
            count={50}
            variant="outlined"
            shape="rounded"
          />
        </div>


        <div className="gallery">
          {
            loading ? <Loading></Loading> :
              pokemonData.map(
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
