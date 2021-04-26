import styled from "styled-components/native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Headers = styled.View`
  padding-horizontal: 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  line-height: 20px;
  color: ${colors.heading};
`;

export const Listagem = styled.FlatList`
  height: 46px;
  /* justify-content: center; */
  padding-bottom: 5px;
  margin-left: 32px;
  margin-vertical: 32px;
`;

export const Plants = styled.View`
  flex: 1;
  justify-content: center;
  padding-horizontal: 32px;
`;

export const ContentContainerStyle = styled.FlatList``;
