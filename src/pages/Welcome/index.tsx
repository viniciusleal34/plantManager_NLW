import React, { useCallback } from "react";

import wateringImg from "../../assets/watering.png";
import { Container, Image, SubTitle, Title, Button, Wrapper } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleStart = useCallback(() => {
    navigation.navigate("UserIdentification");
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie {"\n"}
          suas plantas {"\n"}
          de forma fácil
        </Title>
        <Image source={wateringImg} resizeMode="contain" />
        <SubTitle>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar
        </SubTitle>
        <Button activeOpacity={0.7} onPress={handleStart}>
          <Feather name="chevron-right" size={32} color="#fff" />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Welcome;
