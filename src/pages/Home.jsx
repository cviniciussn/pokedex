import React from 'react'
import styled from 'styled-components'
import PokeCard from '../components/Cards/Cards'

const HomeComponent = styled.div`

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

   //background-color: blue;

`

export default function Home() {
    return (
        <HomeComponent>
            <PokeCard></PokeCard>
        </HomeComponent>
    )
}
