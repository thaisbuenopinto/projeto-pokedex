import { GlobalContext } from "./GlobalContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constans";



import bug from "../assets/bug.png"
import fire from "../assets/fire.png"
import flying from "../assets/flying.png"
import grass from "../assets/grass.png"
import normal from "../assets/normal.png"
import poison from "../assets/poison.png"
import water from "../assets/water.png"


export function GlobalState (props) {
    
    const [pokedex, setPokedex] = useState([]);
    const [pokeData, setPokeData] = useState([]);
    const [detail, setDetail] = useState([])
   
   
   
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

    const backgroundByType = (typeOfPokemon) => {
        switch (typeOfPokemon) {
            case "bug":
                return "#76A866";
            case "fire":
                return "#EAAB7D";
            case "grass":
                return "#729F92";
            case "normal":
                return "#BF9762";
            case "water":
                return "#71C3FF";
            default:
                return "#FFFF"
        }
    }

    const imageByType = (imagebyTypeOfPokemon) => {
        switch (imagebyTypeOfPokemon) {
            case "bug":
                return bug
            case "fire":
                return fire
            case "flying":
                return flying
            case "grass":
                return grass
            case "normal":
                return normal
            case "poison":
                return poison
            case "water":
                return water
            default:
                break;
        }
    }

    const abbreviate = (abbreviateStats) => {
        switch (abbreviateStats) {
            case "Hp":
                return "Hp:"
            case "Attack":
                return "Attack:"
            case "Defense":
                return "Defense:"
            case "Special-attack":
                return "Sp.Atk:"
            case "Special-defense":
                return "Sp.Def:"
            case "Speed":
                return "Speed:"
            default:
                break;
        }
    }
    
    const colorProgress = (statName) => {
        switch (statName) {
            case "hp":
                return "#ff7c2e"
            case "attack":
                return "#ff7c2e"
            case "defense":
                return "#ff7c2e"
            case "special-attack":
                return "#ffdd69"
            case "special-defense":
                return "#d9bc59"
            case "speed":
                return "#e06926"
            default:
                return "yellow"
        }
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const sendToPokedex = (pokemonSend) => {
        const readyOnPokedex = pokedex?.find((pokemonInPokedex) => pokemonInPokedex.name === pokemonSend.name)
        if (!readyOnPokedex) {
            const newPokedex = [...pokedex, pokemonSend]
            const newpokeData= pokeData?.filter((pokemonInPokedex) => pokemonInPokedex.name !== pokemonSend.name)
            setPokedex(newPokedex)
            setPokeData(newpokeData)
           
        }
    }

    const removeFromPokedex = (removePokemon) => {
        const newPokedex = pokedex?.filter((pokemonInPokedex) => pokemonInPokedex.name !== removePokemon.name)
        const newPokeData = [...pokeData, removePokemon]
        setPokedex(newPokedex)
        setPokeData(newPokeData)

    }
   
  

    const context = {
        pokeData,
        setPokeData,
        pokedex,
        setPokedex,
        backgroundByType,
        imageByType,
        sendToPokedex,
        removeFromPokedex,
        setDetail,
        detail, 
        abbreviate,
        colorProgress,
        capitalizeFirstLetter
        
       
       
        
    }



    return(
        
        <GlobalContext.Provider value={context}>
        {props.children}
        </GlobalContext.Provider>
        
    )
}