import React from 'react';
import styled from 'styled-components';

// components
import Header from '../../components/Header/Header';
import MainContent from '../../components/MainContent/MainContent';
import Footer from '../../components/Footer/Footer';

// style
import { HomeComponent } from './home-style';

export default function Home() {
    return (
        <HomeComponent>
            <MainContent></MainContent>
            <Footer></Footer>
        </HomeComponent>
    )
}
