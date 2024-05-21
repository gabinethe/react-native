import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  gap: 10px;
  margin-top: 48px;
`;

export const HeaderImage = styled.Image`
  width: 36px;
  height: 24px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #bfbfd4;
  margin-top: 4px;
`;

export const TitleColored = styled.Text`
  font-size: 20px;
  color: #8fb2f5;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  color: #7f7f98;
  width: 311px;
  height: 36px;
  padding-left: 20px;
  border-radius: 8px;
  background-color: #1e1e29;
  padding: 17px 20px;
  margin-top: 40px;
`;
