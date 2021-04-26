import styled, { css } from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface ButtonProps {
  active?: boolean;
}
interface TextProps {
  active?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  background-color: ${(props: any) =>
    props.active ? colors.green_light : colors.shape};
  height: 40px;
  width: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-horizontal: 5px;
`;

export const Text = styled.Text<TextProps>`
  color: ${(props: any) => (props.active ? colors.green_dark : colors.heading)};
  font-family: ${(props: any) => (props.active ? fonts.heading : fonts.text)};
`;
