import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";

import {
  Container,
  FlatList,
  PlantsTitle,
  SpootLight,
  SpootLightImage,
  SpootLightText,
} from "./styles";
import waterdrop from "../../assets/waterdrop.png";
import { loadPlants, PlantProps } from "../../libs/storage";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { Plants } from "../PlantSelect/styles";
import PlantCardSecudary from "../../components/PlantCardSecudary";

const MyPlants: React.FC = () => {
  const [] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [nextWaterd, setNextWatered] = useState<string>();

  const loadStoragedData = useCallback(async () => {
    try{
      const plantsStorage:any = await loadPlants();
      console.log('a');
      
      console.log(await loadPlants())
      // const nextTime = formatDistance(
      //   new Date(plantsStorage[0].dateTimeNotification).getTime(),
      //   new Date().getTime(),
      //   { locale: pt }
      // )
  
      // setNextWatered(
      //   `Não esquecaça de regar a ${plantsStorage[0].name} á ${nextTime} horas`
      // );
      // setMyPlants(plantsStorage);
      // setLoading(false);
    }catch(e){
      console.log(e)
      setLoading(false);

    }
 
  }, [nextWaterd, myPlants, loading]);

  useEffect(() => {
    loadStoragedData();
  }, []);

  return (
    <Container>
      <Header />
      <SpootLight>
        <SpootLightImage source={waterdrop} />
        <SpootLightText>aaa</SpootLightText>
      </SpootLight>
      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>
        <FlatList
          data={MyPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PlantCardSecudary data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </Plants>
    </Container>
  );
};

export default MyPlants;
