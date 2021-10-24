import React from "react";
import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-family: Monospace;
  font-weight: bold;
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
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    color: white;
    background: black;
    cursor: pointer;
    font-weight: 600;
  }
`;

const CityComponents = () => {
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox>
        <input placeholder="City" />
        <button>Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponents;
