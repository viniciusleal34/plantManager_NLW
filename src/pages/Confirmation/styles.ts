import styled from "styled-components/native";
import color from "../../styles/colors";
import { Dimensions } from "react-native";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 22px;
  line-height: 38px;
  text-align: center;
  color: ${color.heading};
  font-family: ${fonts.heading};
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  text-align: center;
  color: ${color.heading};
  font-family: ${fonts.text};
  padding-vertical: 10px;
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding-horizontal: 50px;
  margin-top: 20px;
`;
