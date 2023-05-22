import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Detalhes, 
         HomePage,
         Pokedex, 
         ErrorPage } from '../pages/index';



export function Router () {

    

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/detalhes" element={<Detalhes/>}/>
            <Route path="/pokedex" element={<Pokedex/>}/>
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
        </BrowserRouter>
    )
}