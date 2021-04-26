import styled, { css } from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${colors.shape};
  border-radius: 20px;
  align-items: center;
  margin: 10px;
  padding-vertical: 10;
`;

export const Text = styled.Text`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
  margin-vertical: 16px;
`;
