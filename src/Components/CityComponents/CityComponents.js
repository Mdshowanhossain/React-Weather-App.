import React from "react";
import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const ChooseCityLabel = styled.span`
  color: #3dcfd3;
  font-size: 18px;
  font-family: "Gugi";
  font-weight: 700;
  letter-spacing: 3px;
`;
const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 2px;
  color: black;
  font-size: 18px;
  font-family: Monospace;
  font-weight: bold;
  margin: 30px auto;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
  }
  & button {
    padding: 15px;
    font-size: 17px;
    letter-spacing: 2px;
    border: 1px solid #3dcfd3;
    margin-left: 1px;
    font-family: "Gugi";
    outline: none;
    color: #3dcfd3;
    background: black;
    cursor: pointer;
    font-weight: 400;
    transition: all 0.3s ease;
  }
  & button:hover {
    background-color: #3dcfd3;
    color: white;
    border: 1px solid #3dcfd3;
  }
`;

const CityComponents = ({ setCity, fetchWeather }) => {
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input placeholder="City" onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponents;
