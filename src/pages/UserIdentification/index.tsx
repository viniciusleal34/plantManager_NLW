import React, { useCallback, useState } from "react";
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Container,
  Content,
  Form,
  Header,
  Emoji,
  Title,
  Input,
  Footer,
  KeyboardAvoidingView,
} from "./styles";
import Button from "../../components/Button";

const UserIdentification: React.FC = () => {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const handleSubmit = useCallback(async () => {
    if (!name) return Alert.alert("Ops...", "Me diz como chamar 😢");
    try {
      await AsyncStorage.setItem("@plantmanager:user", name);
      navigation.navigate("Confirmation", {
        title: "Prontinho",
        subtitle:
          "Agora vamos começar a cuidar das suas plantinhas com muito cuidado.",
        buttonTitle: "Começar",
        icon: "smile",
        nextScreen: "PlantSelect",
      });
    } catch {
      Alert.alert("Não foi possível salvar o nome do usuário. 😢");
    }
  }, [name]);

  //  da pra mostra o useCallback bem, tire o array de depedencia
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!name);
  }, [isFilled]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputChange = useCallback(
    (value: string) => {
      setIsFilled(!!value);
      setName(value);
    },
    [isFilled, name]
  );

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Form>
              <Header>
                <Emoji>{isFilled ? "😄" : "😃"}</Emoji>
                <Title>
                  Como podemos {"\n"}
                  chamar você?
                </Title>
              </Header>
              <Input
                isFocused={isFocused}
                isFilled={isFilled}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <Footer>
                <Button title="Confirmar" onPress={handleSubmit} />
              </Footer>
            </Form>
          </Content>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default UserIdentification;
