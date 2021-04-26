import styled from "styled-components/native";
import { SvgFromUri } from "react-native-svg";
import colors from "../../styles/colors";
import { getBottomSpace } from "react-native-iphone-x-helper";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding-horizontal: 30px;
  padding-vertical: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.shape};
`;

export const ImagePlant = styled(SvgFromUri)``;

export const PlantName = styled.Text`
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
  margin-top: 15px;
`;

export const PlantAbout = styled.Text`
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.text};
  font-size: 17px;
  margin-top: 10px;
`;

export const Controller = styled.View`
  background-color: ${colors.white};
  padding-horizontal: 20px;
  padding-top: 20px;
  padding-bottom: ${getBottomSpace() || 20}px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue_light};
  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  height: 56px;
  width: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.text};
  color: ${colors.blue};
  font-size: 17px;
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${fonts.complement};
  color: ${colors.heading};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const DateTimePickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding-vertical: 40px;
`;

export const DateTimePickerText = styled.Text`
  color: ${colors.heading};
  font-size: 24px;
  font-family: ${fonts.text};
`;
