import React, { useCallback } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import Button from "../../components/Button";

import { Container, Content, Emoji, Title, Subtitle, Footer } from "./styles";

interface Parms {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}

const emojis = {
  hug: "🤗",
  smile: "😄",
};

const Confirmation: React.FC = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Parms;

  const handleMoveOn = useCallback(() => {
    navigation.navigate(nextScreen);
  }, [routes.params]);

  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Footer>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
