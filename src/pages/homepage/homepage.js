import { useContext } from "react";
import { PokeCard } from "../../components/Cards/cards";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Header } from "../../components/Header/header";
import { PageListPokemon } from "./HomePageStyled";


export function HomePage({setDetail}) {

  const context = useContext(GlobalContext)
  const {pokeData} = context

  console.log(pokeData)
  



  return (
    <div>
      <Header/>
      <PageListPokemon>
      {pokeData &&
        pokeData.map((poke) => {   
          return(              
            <PokeCard
             
              pokemon={poke}
             
                          
            />
          )
        })}

        
        </PageListPokemon>
    </div>
  );
}