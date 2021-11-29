import React from 'react';
import styled from 'styled-components';

import { HeaderComponent } from './header-style.js'

import logo from '../../img/logo.svg';

export default function Header() {
    return (
        <HeaderComponent>
            <div className='header-content'>
                <img src={logo} alt='Logo' />

                <nav>
                    <ul className='navigation'>
                        <li className='active'><a href="/home" >Home</a></li>
                        <li><a href="/pokedex" className='active'>Pokedéx</a></li>
                        <li><a href="/legendary">Lengendários</a></li>
                    </ul>
                </nav>
            </div>
        </HeaderComponent>
    )
};
