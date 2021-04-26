import React from "react";

import { Container, Text } from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const EnviromentButton: React.FC<EnviromentButtonProps> = ({
  title,
  active = false,
  ...rest
}) => {
  return (
    <Container {...rest} active={active}>
      <Text active={active}>{title}</Text>
    </Container>
  );
};

export default EnviromentButton;
