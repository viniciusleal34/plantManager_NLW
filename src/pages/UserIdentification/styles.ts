import styled from "styled-components/native";
import color from "../../styles/colors";
import { Dimensions } from "react-native";
import fonts from "../../styles/fonts";

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 54px;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Title = styled.Text`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${color.heading};
  font-family: ${fonts.heading};
  margin-top: 20px;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Input = styled.TextInput<InputProps>`
  border-bottom-width: 1px;
  border-color: ${color.gray};
  color: ${color.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  ${(props: any) =>
    (props.isFocused || props.isFilled) && `border-color:${color.green}`}
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding-horizontal: 20px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
