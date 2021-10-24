import axios from "axios";
import React, { useState } from "react";

import styled from "styled-components";
import CityComponents from "./Components/CityComponents/CityComponents";
import WeatherComponents from "./Components/WeatherComponents/WeatherComponents";

const API_KEY = "d9584d01419d0b07c357612e4d13d8be";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  border-radius: 5px;
  width: 470px;
  background: #161616;
`;
const AppLabel = styled.span`
  color: #3dcfd3;
  font-size: 24px;
  font-weight: bold;
  // margin-top: 20px;
  padding-top: 35px;
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
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    setWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <WeatherComponents weather={weather} />
      ) : (
        <CityComponents setCity={setCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
};

export default App;
