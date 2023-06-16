import { Header } from "../../components/Header/header"
import { GlobalContext } from "../../contexts/GlobalContext";
import { PagePokedex } from "./PokedexStyled";
import { useContext } from "react";
import { PokeCard } from "../../components/Cards/cards";

export function Pokedex ({setDetail}) {

    const context = useContext(GlobalContext)
    const {pokedex} = context

    return (    
        <div>
            <Header/>
            <PagePokedex>
                {pokedex.map((pokePokedex) => (
                    <PokeCard
                        
                        pokemon={pokePokedex}
                        
                       
                    />
                ))}
            </PagePokedex>
           
        </div>
    )
}