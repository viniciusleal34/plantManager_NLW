import styled, { css } from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled(RectButton)`
  width: 100%;
  padding-horizontal: 10px;
  padding-vertical: 25px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.shape};
  margin-vertical: 5px;
`;

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${fonts.heading};
  font-size: 17px;
  color: ${colors.heading};
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;
