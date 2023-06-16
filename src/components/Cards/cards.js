import { useContext } from "react";
import { goToDetailPage } from "../../routes/coordinator"; 
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CardStyled, ButtonsStyled, ImageStyled } from "./CardStyled";

export function PokeCard({ pokemon }) {
  const image = pokemon.sprites.other["official-artwork"].front_default;
  const name = pokemon.name;
  const id = pokemon.id;
  const type = pokemon.types[0].type.name;
  const type2 = pokemon.types.length > 1 ? pokemon.types[1].type.name : "";

  const navigate = useNavigate(); 
  const location = useLocation();
  const context = useContext(GlobalContext);
  const {
    backgroundByType,
    imageByType,
    sendToPokedex,
    removeFromPokedex,
    setDetail
  } = context;

 const detailPage = () => {
    setDetail(pokemon);
    goToDetailPage(navigate); 
  };
 
  console.log(pokemon);

  if (location.pathname === "/") {
    return (
      <div>
        <CardStyled color={backgroundByType(type)} alt="">
          {id < 10 ? <h3>#0{id}</h3> : <h3>#{id}</h3>}
          <h2>{name}</h2>
          <ImageStyled>
            <img src={imageByType(type)} />
            {type2 && <img src={imageByType(type2)} alt="" />}
          </ImageStyled>
          <img src={image} alt="" />
          <ButtonsStyled>
            <button onClick={() => {detailPage()}}>Detalhes</button>
            <button onClick={() => {sendToPokedex(pokemon)}}>Capturar!</button>
          </ButtonsStyled>
        </CardStyled>
      </div>
    );
  } else if (location.pathname === "/pokedex") {
    return (
      <div>
        <CardStyled color={backgroundByType(type)} alt="">
          {id < 10 ? <h3>#0{id}</h3> : <h3>#{id}</h3>}
          <h2>{name}</h2>
          <ImageStyled>
            <img src={imageByType(type)} />
            {type2 && <img src={imageByType(type2)} alt="" />}
          </ImageStyled>
          <img src={image} alt="" /> 
          <ButtonsStyled>  
         <button onClick={() => detailPage()}>Detalhes</button>

          <button onClick={() => {removeFromPokedex(pokemon)}}>Excluir!</button>

          </ButtonsStyled>
        </CardStyled>
      </div>
    );
  }
}
