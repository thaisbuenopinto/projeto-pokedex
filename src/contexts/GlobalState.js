import { GlobalContext } from "./GlobalContext";
import { HomePage } from "../pages";
import { Router } from "../routes/router";
import { useState } from "react";


export function GlobalState ({children}) {
    
    const [pokedex, setPokedex] = useState([]);
    const [pokeData, setPokeData] = useState([]);

    const context = {
        pokeData,
        setPokeData,
        pokedex,
        setPokedex
              
    }



    return(
        <div>
        <GlobalContext.Provider value={context}>
        {children}
        </GlobalContext.Provider>
        </div>
    )
}