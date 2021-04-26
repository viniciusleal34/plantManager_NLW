import React from "react";

import { Container, Animation } from "./styles";
import loadAnimation from "../../assets/load.json";

const Load: React.FC = () => {
  return (
    <Container>
      <Animation source={loadAnimation} autoPlay loop />
    </Container>
  );
};

export default Load;
