import React from "react";

import styled from "styled-components";
import CityComponents from "./Components/CityComponents/CityComponents";
import WeatherComponents from "./Components/WeatherComponents/WeatherComponents";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  border-radius: 5px;
  width: 380px;
  background: white;
`;
const AppLabel = styled.span`
  color: black;
  font-size: 24px;
  font-weight: bold;
`;

const CityComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
const WeatherComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
const App = () => {
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      <CityComponent>
        <CityComponents />
      </CityComponent>
      <WeatherComponent>
        <WeatherComponents />
      </WeatherComponent>
    </Container>
  );
};

export default App;
