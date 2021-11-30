import React from 'react';
import { useEffect } from 'react';
import { useData } from '../../contexts/GeneralContexts';
// components
import MainContent from '../../components/MainContent/MainContent';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

// style
import { HomeComponent } from './home-style';

export default function Home() {

    return (
        <HomeComponent>
            <Header />
            <MainContent></MainContent>
            <Footer></Footer>
        </HomeComponent>
    )
}
