import styled from "styled-components/native";
import colors from "../../styles/colors";
import { Dimensions } from "react-native";
import fonts from "../../styles/fonts";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${colors.heading};
  margin-top: 38px;
  text-align: center;
  font-family: ${fonts.heading};
  line-height: 34px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding-horizontal: 20px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const Image = styled.Image`
  width: ${Dimensions.get("window").width * 0.7};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
  padding-horizontal: 10px;
`;
