import { useEffect, useContext } from "react";
import { BASE_URL } from "../../constants/constans";
import axios from "axios";
import { PokeCard } from "../../components/Cards/cards";
import { GlobalContext } from "../../contexts/GlobalContext";

export function HomePage() {

  const context = useContext(GlobalContext)
  const {pokeData, setPokeData} = context

  
  const buscarPokemons = async () => {
   try {
    const response = await axios.get(`${BASE_URL}`)
     const data = response.data.results
     
      const pokemonsPromises = data.map(async(pokemon)=> {
        try {
          const response = await axios.get(pokemon.url)
          return response.data
        } catch (error) {
          console.log(error)
        }
     }) 
     const pokemons = await Promise.all(pokemonsPromises)
     setPokeData(pokemons)
   } catch (error) {
    
   }
  }    

  useEffect(() => {
    buscarPokemons();
   
  }, []);



  return (
    <div>
      {pokeData &&
        pokeData.map((poke) => {
          return (
            <PokeCard
              image={poke.sprites.other["official-artwork"].front_default}
              name={poke.name}
              id={poke.id}
              type={poke.types[0].type.name}
              type2={poke.types.length > 1 ? poke.types[1].type.name : ""}
              poke={poke}
             
            />
          );
        })}
    </div>
  );
}
