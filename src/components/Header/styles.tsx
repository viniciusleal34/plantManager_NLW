import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 20px;
  margin-top: ${getStatusBarHeight()};
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const UserName = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;
