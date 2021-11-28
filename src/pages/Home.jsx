import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const HomeComponent = styled.div`

    width: 100vw;
    height: 100vh;
`

export default function Home() {
    return (
        <HomeComponent>
            <Header></Header>
            <Main></Main>
        </HomeComponent>
    )
}
