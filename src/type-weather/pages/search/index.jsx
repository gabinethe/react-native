import React from "react";
import {
  Container,
  HeaderContainer,
  TitleText,
  HeaderImage,
  TitleContainer,
  TitleColored,
  Subtitle,
  Input,
} from "./styles";
import Cloud from "../../assets/images/Logo.png";
import Background from "../../assets/images/Background.png";

export default function Search() {
  return (
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImage source={Cloud} />
        <TitleText>TypeWeather</TitleText>
      </HeaderContainer>
      <TitleContainer>
        <TitleText>
          Boas vindas ao <TitleColored>TypeWeather</TitleColored>
        </TitleText>
        <Subtitle>Escolha um local para ver a previsão do tempo</Subtitle>
      </TitleContainer>
      <Input placeholder="Buscar Local" placeholderTextColor="#7f7f98"></Input>
    </Container>
  );
}

