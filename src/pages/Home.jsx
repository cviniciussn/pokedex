import React from 'react';
import styled from 'styled-components';
// import PokeCard from '../components/Cards/Cards';
import Header from '../components/Header/Header';

const HomeComponent = styled.div`

    width: 100vw;
    height: 100vh;

    ${'' /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
        comentado para não ficar no centro.
    */}
`

export default function Home() {
    return (
        <HomeComponent>
            <Header></Header>
        </HomeComponent>
    )
}
