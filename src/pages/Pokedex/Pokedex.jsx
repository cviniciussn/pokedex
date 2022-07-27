import React, { useEffect, useState } from 'react'
import { PokedexComponent } from './pokedex-style'
import { useData } from '../../contexts/GeneralContexts';

import PokeCard from '../../components/Cards/Cards'
import Pagination from '@mui/material/Pagination'
import Loading from '../Loading/Loading';
import Modal from '../../components/Modal/Modal'
import Header from '../../components/Header/Header';



export default function Home() {

  const [pokemonData, setPokemonData] = useState([])
  const [currentPage, setPage] = useState(1)
  const { getPokemons, loading, modal } = useData()


  useEffect(() => {
    async function handleData() {
      await getPokemons(currentPage)
      let data = localStorage.getItem("pokemonData")
      data = JSON.parse(data)
      setPokemonData(data)
    };
    handleData()
  }, [currentPage])


  return (<>

    {
      modal && <Modal />
    }
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
            loading ? <Loading /> :
              pokemonData.map(
                pokemon => {
                  return (
                    <PokeCard
                      key={pokemon.name}
                      name={pokemon.name}
                      pic={pokemon.pic}
                      attack={pokemon.attack}
                      defense={pokemon.defense}
                      type_first={pokemon.type_first}
                      type_second={pokemon.type_second}
                      abilities={pokemon.abilities}
                      healthPoints={pokemon.healthPoints}
                      speed={pokemon.speed}
                      specialAttack={pokemon.specialAttack}
                      specialDefense={pokemon.specialDefense}
                      experience={pokemon.experience}
                      id={pokemon.id}
                    />
                  )

                }
              )}
        </div>
      </div>
    </PokedexComponent>

  </>
  )

}
