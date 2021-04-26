import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

import { Container, Greeting, UserName, Image } from "./styles";
import userImg from "../../assets/Vinicius.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header: React.FC = () => {
  const [userName, setUserName] = useState<string>();

  const loadStorageUserName = useCallback(async () => {
    const user = await AsyncStorage.getItem("@plantmanager:user");
    setUserName(user || "");
  }, [userName]);

  useEffect(() => {
    loadStorageUserName();
  }, [userName]);

  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>{userName}</UserName>
      </View>
      <Image source={userImg} />
    </Container>
  );
};

export default Header;
