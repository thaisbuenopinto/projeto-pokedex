import { Header } from "../../components/Header/header";
import {
  DetailPage,
  ContainerDetail,
  ImgFront_Back,
  BaseStats,
  InfoAndMoves,
  ContainerMoves,
  Id,
  TypeMoves,
  ImgOfficial,
  ProgressBarContainer,
  ProgressBar,
} from "./paginadetailStyled";

import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


export default function DetailPokemonPage() {
  const context = useContext(GlobalContext)
  
  const { imageByType, detail, backgroundByType,  abbreviate,
    colorProgress, capitalizeFirstLetter } = context;
  

  console.log(detail);

  const id = detail.id;
  const name = detail.name;
  const oficialImg = detail.sprites.other["official-artwork"].front_default;
  const backImg = detail.sprites.back_default;
  const type1 = detail.types[0]?.type.name;
  const type2 = detail.types[1]?.type.name;
  const stats = detail.stats;
  const moves = detail.moves;
  const statName = stats.map((stat) => stat.stat.name);

  return (
    <div>
      <Header />
      <DetailPage color={backgroundByType(type1)}>
        <div>
          <h1>Detalhes</h1>
        </div>
        <ContainerDetail>
          <ImgFront_Back>
            <div>
              <img src={oficialImg} />
            </div>
            <div>
              <img src={backImg} />
            </div>
          </ImgFront_Back>
          <BaseStats>
            <h2>base stats:</h2>
            <div>
              {stats.map((stat, index) => {
                return (
                  <div>
                      <h5>{abbreviate(capitalizeFirstLetter(stat.stat.name))} {stat.base_stat}</h5>
                    <ProgressBarContainer>
                    <ProgressBar color={colorProgress(statName[index])} progress={stat.base_stat}></ProgressBar>
                    </ProgressBarContainer>
                    <br />
                  </div>
                );
              })}
            </div>
            <div>
              <p>
                Total:{" "}
                {stats.length > 0
                  ? stats.reduce(
                      (accumulator, currentStat) =>
                        accumulator + currentStat.base_stat,
                      0
                    )
                  : 0}
              </p>
            </div>
          </BaseStats>
          <InfoAndMoves>          
            <div>
            {id < 10 ? <Id>#0{id}</Id> : <Id>#{id}</Id>}
              <h3>{name}</h3>
              <img src={imageByType(type1)} alt="" />
              {type2 && <img src={imageByType(type2)} alt="" />}
            </div>
            <ContainerMoves>
            <div>
              <h2>moves:</h2>
                {moves
                  ?.filter((move, index) => index < 4)
                  .map((move) => {
                    return( 
                        <div>
                        <TypeMoves>
                            {capitalizeFirstLetter(move.move.name)}
                        </TypeMoves>
                        <br></br>
                    </div>
                    )
                  })}             
            </div>
            </ContainerMoves>

            </InfoAndMoves>

            <ImgOfficial>
            <img src={oficialImg} alt="" />
            </ImgOfficial>

        </ContainerDetail>

      </DetailPage>
    </div>
  );
}
