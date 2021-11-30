import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Pokedex from '../pages/Pokedex/Pokedex'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'

export default function Router() {
    return (
        <BrowserRouter>
            <Route path='/' component={Home} exact />
            <Route path='/pokedex' component={Pokedex} exact />
        </BrowserRouter>
    )
}
