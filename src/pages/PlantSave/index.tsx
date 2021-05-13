import React, { useCallback, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";

import {
  Container,
  PlantInfo,
  AlertLabel,
  ImagePlant,
  PlantAbout,
  Controller,
  PlantName,
  TipContainer,
  TipImage,
  TipText,
  DateTimePickerText,
  DateTimePickerButton,
} from "./styles";

import waterdrop from "../../assets/waterdrop.png";
import Button from "../../components/Button";
import { Alert, Platform } from "react-native";
import { format, isBefore } from "date-fns";
import { loadPlants, PlantProps, savePlant } from "../../libs/storage";

interface Params {
  plant: PlantProps;
}

const PlantSave: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == "ios");
  const navigation = useNavigation();

  const route = useRoute();
  const { plant } = route.params as Params;

  const handleChangeTime = useCallback(
    (event: Event, dateTime: Date | undefined) => {
      if (Platform.OS === "android") {
        setShowDatePicker((oldState) => !oldState);
      }
      if (dateTime && isBefore(dateTime, new Date())) {
        setSelectedDateTime(new Date());
        return Alert.alert("Ops...", "Escolha uma hora no futuro! 🕑");
      }

      if (dateTime) {
        setSelectedDateTime(dateTime);
      }
    },
    []
  );

  const handleOpenDateTimePickerForAndroid = useCallback(() => {
    setShowDatePicker((oldState) => !oldState);
  }, [showDatePicker]);

  const handleSave = useCallback(async () => {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });
      navigation.navigate("Confirmation", {
        title: "Tudo certo",
        subtitle:
          "Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.",
        buttonTitle: "Muito Obrigado :D",
        icon: "hug",
        nextScreen: "MyPlants",
      });
    } catch {
      return Alert.alert("Ops...", "Não foi possível salvar. 😭");
    }
  }, []);

  return (
    <Container>
      <PlantInfo>
        <ImagePlant uri={plant.photo} width={150} height={150} />
        <PlantName>{plant.name}</PlantName>
        <PlantAbout>{plant.about}</PlantAbout>
      </PlantInfo>
      <Controller>
        <TipContainer>
          <TipImage source={waterdrop} />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>
      </Controller>
      <AlertLabel>Escolha o melhor horário para ser lembrado</AlertLabel>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDateTime}
          mode="time"
          display="spinner"
          onChange={handleChangeTime}
        />
      )}
      {Platform.OS === "android" && (
        <DateTimePickerButton onPress={handleOpenDateTimePickerForAndroid}>
          <DateTimePickerText>{`Mudar ${format(
            selectedDateTime,
            "HH:mm"
          )}`}</DateTimePickerText>
        </DateTimePickerButton>
      )}

      <Button title="Cadastrar planta" onPress={handleSave} />
    </Container>
  );
};

export default PlantSave;
