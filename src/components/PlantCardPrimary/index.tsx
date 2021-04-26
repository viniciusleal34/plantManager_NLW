import React from "react";

import { Container, Text } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

const EnviromentButton: React.FC<PlantProps> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Text>{data.name}</Text>
    </Container>
  );
};

export default EnviromentButton;
