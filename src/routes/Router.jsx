import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pokedex from '../pages/Pokedex/Pokedex'
import Home from '../pages/Home/Home'


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/pokedex' element={<Pokedex />} exact />
            </Routes>
        </BrowserRouter>
    )
}
