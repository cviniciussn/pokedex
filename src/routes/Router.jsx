import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Pokedex from '../pages/Pokedex/Pokedex'
import Home from '../pages/Home/Home'


export default function Router() {
    return (
        <BrowserRouter>
            <Route path='/' component={Home} exact />
            <Route path='/pokedex' component={Pokedex} exact />
        </BrowserRouter>
    )
}
