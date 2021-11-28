import React from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header/Header';
import MainContent from '../components/MainContent/MainContent';
import Footer from '../components/Footer/Footer';

const HomeComponent = styled.div`
width: 100%;
height: 100vh;
`

export default function Home() {
    return (
        <HomeComponent>
            <Header></Header>
            <MainContent></MainContent>
            <Footer></Footer>
        </HomeComponent>
    )
}
