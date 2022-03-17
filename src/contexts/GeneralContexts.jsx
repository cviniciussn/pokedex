import React from 'react'
import axios from 'axios'
import { useState, createContext, useContext } from 'react'



const DataContext = createContext()

export default function GeneralContexts({ children }) {

  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const pokemonData = []
  const link = []

  async function getPokemons(page) {
    setLoading(true)

    if (page === 1) {
      page = 0
    }

    await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${page}0&limit=50`).then(
      res => {
        res.data.results.forEach(
          pokemon => {
            link.push(pokemon.url)
          }
        )
      }
    ).catch(error => {
      throw console.error(error)
    })

    localStorage.removeItem('pokemonData')

    for (let i = 1; i <= 20; i++) {
      await axios.get(`${link[i - 1]}`).then(
        response => {
          const attakAndDefense = []
          const types = []

          response.data.stats?.forEach(
            res => {
              if (res.stat.name && res.stat.name === "attack") {
                attakAndDefense[0] = (res.base_stat)
              } else if (res.stat.name && res.stat.name === "defense") {
                attakAndDefense[1] = (res.base_stat)
              }
            }
          )

          response.data.types?.forEach(
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
    <DataContext.Provider value={{
      getPokemons,
      pokemonData,
      loading,
      modal,
      setModal
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
    modal,
    setModal
  } = context

  return (
    {
      getPokemons,
      pokemonData,
      loading,
      modal,
      setModal
    }
  )
}
