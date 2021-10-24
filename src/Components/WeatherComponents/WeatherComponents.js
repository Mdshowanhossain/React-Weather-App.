import React from "react";

import styled from "styled-components";

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

const WeatherComponent = () => {
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>30 C </span>| Cloudy
        </Condition>
        <WeatherLogo src="/icons/perfect-day.svg" />
      </WeatherCondition>
      <Location>Khulna,Bangladesh</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
    </>
  );
};

export default WeatherComponent;
