import styled from 'styled-components'
import Background from '..//../Assets/background.svg' //importo a imagem


export const Container = styled.div` // imagens
background: url("${Background}");
background-size: cover; //quando quero que cubra toda a área
display: flex; // vai um do lado do outro
flex-direction: column; //vai um p baixo do outro
align-items: center; // mexe no eixo secundário
gap: 40px; // espaçamento
height: 100%;
min-height: 100vh; //altura mínima
`;

export const Image = styled.img`
margin-top: 30px;
`;




export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
margin-top: 20px;

p {
  font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 28px;

color: #FFFFFF;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

`