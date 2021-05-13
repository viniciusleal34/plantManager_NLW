import React from "react";

import { Container, Details, TimeLabel, Title, Time } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

const PlantCardSecudary: React.FC<PlantProps> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={50} height={50} />
      <Title>{data.name}</Title>
      <Details>
        <Time>Regue</Time>
        <TimeLabel>{data.hour}</TimeLabel>
      </Details>
    </Container>
  );
};

export default PlantCardSecudary;
