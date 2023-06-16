import { useNavigate,useLocation } from "react-router-dom"; 
import { goToLoginPage, goToPokePage } from "../../routes/coordinator";
import { PokedexHeader, DetailHeader, HomePageHeader } from "./HeaderStyled";
import logo from "../../assets/logo.png"




export function Header() {

    
    const navigate = useNavigate()
    const location = useLocation()


    
    if (location.pathname === "/") {
        return (
            <HomePageHeader>
                <img src={logo} alt=""/>
                <button onClick={()=>{goToPokePage(navigate)}} >Pokédex</button>
            </HomePageHeader>
        )
    } else if (location.pathname === "/pokedex") {
        return (
            <PokedexHeader>
                <button onClick={() => { goToLoginPage(navigate) }}>&#65513;Todos os Pokémons </button>
                <img src={logo} alt=""/>
            </PokedexHeader>
        )
    } else if (location.pathname === "/detail") {
        return (
            <DetailHeader>
                <button onClick={() => { goToLoginPage(navigate) }}>&#65513;Todos os Pokémons </button>
                <img src={logo} alt=""/>
                <button>Excluir da Pokedex</button>
            </DetailHeader>
        )
    }
}

