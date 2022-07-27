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
    page--;
    await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${page*21}&limit=21`).then(
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

    for (let i = 0; i <= 20; i++) {
      await axios.get(`${link[i]}`).then(
        response => {
          const attackAndDefense = []
          const types = []
          const abilitiesList = []
          let hp = 0
          let speed = 0

          response.data.stats?.forEach(
            res => {
              if (res.stat.name){
                switch (res.stat.name){
                case "attack":
                   attackAndDefense[0] = res.base_stat
                   break
                case "defense":
                  attackAndDefense[1] = res.base_stat
                  break
                case "hp":
                   hp = res.base_stat
                   break
                case "special-attack":
                  attackAndDefense[2] = res.base_stat
                  break
                case "special-defense":
                  attackAndDefense[3] = res.base_stat
                  break
                case "speed":
                  speed = res.base_stat
                  break;
                default:
                  break
                }
              }
            }
          )
          response.data.abilities?.forEach(
            res => {
              abilitiesList.push(res.ability.name)
            }
          )
          response.data.types?.forEach(
            res => {
              types.push(res.type.name)
            }
          )
          pokemonData.push({
            name: response.data.name[0].toUpperCase() + response.data.name.slice(1),
            pic: response.data.sprites.other.dream_world.front_default,
            attack: attackAndDefense[0],
            defense: attackAndDefense[1],
            type_first: types[0],
            type_second: types[1],
            abilities: abilitiesList.join(", "),
            healthPoints: hp,
            speed: speed,
            specialAttack: attackAndDefense[2],
            specialDefense: attackAndDefense[3],
            experience: response.data.base_experience,
            id: response.data.id
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
