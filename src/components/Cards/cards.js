import { useState, useContext } from "react";
import { goToDetailPage, goToPokePage } from "../../routes/coordinator"
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

export function PokeCard (props) {  

    const navigate = useNavigate()
    const location = useLocation ()
    const context = useContext(GlobalContext)
    const {pokedex, setPokedex} = context

    

    if (location.pathname === '/') {
     return (
        <div>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <img src={props.image} />
            <p>{props.type}</p>
            <p>{props.type2}</p>
            <button onClick= {() => goToDetailPage(navigate)}>Detalhes</button>
            <button onClick={() => goToPokePage(navigate)}>Capturar</button>
        </div>
     )

    } else if (location.pathname === '/pokedex') {
        return (
            <div>
                <p>{props.id}</p>
                <p>{props.name}</p>
                <img src={props.image} />
                <p>{props.type}</p>
                <p>{props.type2}</p>
                <button onClick= {() => goToDetailPage(navigate)}>Detalhes</button>
                <button onClick={() => goToPokePage(navigate)}>Capturar</button>
            </div>
        )
    }
}
