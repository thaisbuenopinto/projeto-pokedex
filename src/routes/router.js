import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
         HomePage,
         Pokedex, 
         ErrorPage
         } from '../pages/index';

import DetailPokemonPage from '../pages/paginaErradaDetail.js/paginadetail';





export function Router () {

    

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail" element={<DetailPokemonPage />}/>
            <Route path="/pokedex" element={<Pokedex />}/>
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
        </BrowserRouter>
    )
}
