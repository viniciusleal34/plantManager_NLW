import React, { useCallback, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import EnviromentButton from "../../components/EnviromentButton";
import PlantCardPrimary from "../../components/PlantCardPrimary";
import Load from "../../components/Load";
import { PlantProps } from "../../libs/storage";

import Header from "../../components/Header";
import api from "../../services/api";

import {
  Container,
  Headers,
  SubTitle,
  Title,
  Listagem,
  Plants,
  ContentContainerStyle,
} from "./styles";
import colors from "../../styles/colors";
import { useNavigation } from "@react-navigation/core";

interface EnviromentProps {
  key: string;
  title: string;
}

const PlantSelect: React.FC = () => {
  const [enviroments, setEnvirtoments] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [enviromentSelected, setEnviromentSelected] = useState("all");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(true);

  const navigation = useNavigation();

  const fetchEnviroment = useCallback(async () => {
    const { data } = await api.get(
      "plants_environments?_sort=title&_order=asc"
    );
    setEnvirtoments([
      {
        key: "all",
        title: "Todos",
      },
      ...data,
    ]);
  }, [enviroments]);

  const handleEnrivomentSelected = useCallback(
    (environment: string) => {
      setEnviromentSelected(environment);

      if (environment === "all") return setFilteredPlants(plants);

      const filtered = plants?.filter((plant: PlantProps) =>
        plant.environments.includes(environment)
      );

      setFilteredPlants(filtered);
    },
    [enviromentSelected]
  );

  const handleFetchMore = useCallback(
    (distance: number) => {
      if (distance < 1) return;

      setLoadingMore(true);
      setPage((oldValue) => oldValue + 1);
      fetchPlants();
    },
    [loadingMore, page]
  );

  const fetchPlants = useCallback(async () => {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );
    if (!data) return setLoading(true);

    if (page > 1) {
      setPlants((oldValue) => [...oldValue, ...data]);
      setFilteredPlants((oldValue) => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }

    setLoading(false);
    setLoadingMore(false);
  }, [plants, filteredPlants, loading]);

  const handlePlantSelect = useCallback((plant: PlantProps) => {
    navigation.navigate("PlantSave", { plant });
  }, []);

  useEffect(() => {
    fetchEnviroment();
    fetchPlants();
  }, []);

  if (loading) return <Load />;

  return (
    <Container>
      <Headers>
        <Header />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </Headers>
      <View>
        <Listagem
          data={enviroments}
          keyExtractor={({ item }) => String(item?.key)}
          renderItem={({ item }) => (
            <EnviromentButton
              key={item.key}
              title={item.title}
              active={item?.key === enviromentSelected}
              onPress={() => handleEnrivomentSelected(item?.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Plants>
        <ContentContainerStyle
          data={filteredPlants}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={({ item }) => String(item?.id)}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
        />
      </Plants>
    </Container>
  );
};

export default PlantSelect;
