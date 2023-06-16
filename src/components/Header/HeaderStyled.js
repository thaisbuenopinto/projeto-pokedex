import styled from "styled-components";


export const PokedexHeader = styled.div`
  background-color:#ffffff;
  position:absolute;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 18vh;
  position: relative;
  border: solid #33A4F5 1px;
  img{
    width: 20vw;
    height: 15vh;
    margin: 0 auto;
  };
  button{
  cursor: pointer;
  background-color:transparent;
  color:#1A1A1A;
  border:none;
  text-decoration: underline;
  font-family: 'Poppins', sans-serif; 
  margin-right:80%;
  position: absolute;
  font-size:1.4rem;
  
  }
`
export const DetailHeader = styled.div`
  background-color:#ffffff;
  position:absolute;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 18vh;
  position: relative;
  border: solid #33A4F5 1px;
  img{
    width: 20vw;
    height: 15vh;
    margin: 0 auto;
  };
  button:nth-child(1){
  cursor: pointer;
  background-color:transparent;
  color:#1A1A1A;
  border:none;
  text-decoration: underline; 
  width: 15vw;
  height: 8vh;
  font-family: 'Poppins', sans-serif; 
  margin-right:80%;
  position: absolute;
  font-size:1.3rem;
  };
  button:nth-child(3){
  cursor: pointer;
  background-color:#FF6262;
  color:#FFFFFF;
  border-radius: 8px;
  border:none;
  width: 15vw;
  height: 8vh;
  font-family: 'Poppins', sans-serif; 
  margin-left:80%;
  position: absolute;
  font-size:1rem;  
  }
  
`
export const HomePageHeader = styled.div`
  background-color:#ffffff;
  position:absolute;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 18vh;
  position: relative;
  border: solid #33A4F5 1px;
  img{
    width: 20vw;
    height: 15vh;
    margin: 0 auto;
  };
  button{
  cursor: pointer;
  background-color:#33A4F5;
  color:#FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  border-radius: 8px;
  border:none;
  width: 15vw;
  height: 8vh;
  margin-left:80%;
  position: absolute;
  font-size:1.5rem; 
  }
`