import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 30px;
  padding-top: 50px;
  background-color: ${colors.background};
`;

export const SpootLight = styled.View`
  background-color: ${colors.blue_light};
  padding-horizontal: 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpootLightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpootLightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding-horizontal: 20px;
  text-align: justify;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin-vertical: 20px;
`;

export const FlatList = styled.FlatList``;
