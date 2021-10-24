import React from "react";

import styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 30px auto;
`;

const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 50px auto;
`;

const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;

const Location = styled.span`
  font-size: 27px;
  font-weight: bold;
`;
const WeatherInfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px;
  text-align: start;
  width: 70%;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 24px;
  & span {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const WeatherInfoComponent = (props) => {
  const { name, value } = props;

  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = ({ weather }) => {
  const isDay = weather?.weather[0].icon?.includes("d");
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>30 C </span>| Cloudy
        </Condition>
        <WeatherLogo src="/icons/perfect-day.svg" />
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>

      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={isDay ? "sunset" : "sunrise"}
        />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent
          name="pressure"
          value={weather?.pressure?.humidity}
        />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;
