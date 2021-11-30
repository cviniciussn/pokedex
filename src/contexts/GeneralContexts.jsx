import React from 'react'
import axios from 'axios'
import { useState, createContext, useContext } from 'react'



const DataContext = createContext()

export default function GeneralContexts({ children }) {

  const [loading, setLoading] = useState(false)
  const pokemonData = []
  const link = []

  async function getPage(page) {
    if (page === 1) {
      page = 0
    }
    await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${page}0&limit=21`).then(
      res => {
        res.data.results.map(
          pokemon => {
            link.push(pokemon.url)
          }
        )
        getPokemons()
      }

    )
  }

  async function getPokemons() {
    setLoading(true)
    for (let i = 1; i <= 20; i++) {
      await axios.get(`${link[i - 1]}`).then(
        response => {
          const attakAndDefense = []
          const types = []

          response.data.stats?.map(
            res => {
              if (res.stat.name && res.stat.name === "attack") {
                attakAndDefense[0] = (res.base_stat)
              } else if (res.stat.name && res.stat.name === "defense") {
                attakAndDefense[1] = (res.base_stat)
              }
            }
          )

          response.data.types?.map(
            res => {
              types.push(res.type.name)
            }
          )


          pokemonData.push({
            name: response.data.name,
            pic: response.data.sprites.other.dream_world.front_default,
            attak: attakAndDefense[0],
            defense: attakAndDefense[1],
            type_first: types[0],
            type_second: types[1]
          })

          localStorage.setItem('pokemonData', JSON.stringify(pokemonData))
        },
        setLoading(false)
      )
    }
  }

  return (
    <DataContext.Provider
      value={{
        getPokemons,
        pokemonData,
        loading,
        getPage,
      }}>
      {children}
    </DataContext.Provider>
  )

}

export function useData() {
  const context = useContext(DataContext)
  const {
    getPokemons,
    pokemonData,
    loading,
    getPage
  } = context

  return (
    {
      getPokemons,
      pokemonData,
      loading,
      getPage
    }
  )
}
