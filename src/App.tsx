import "./App.css";
import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import React, { useState } from "react";

const API_KEY = "1a7a2f56e674e874e4358793cd3e3dca";

type ResultsStateType = {
  cityName: string;
  temperature: number;
  feelsLike: number;
  country: string;
  sunrise: number;
  sunset: number;
  population: number;
  description: string;
  iconweather: string;
};

export default function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    cityName: "",
    temperature: 0,
    feelsLike: 0,
    country: "",
    sunrise: 0,
    sunset: 0,
    population: 0,
    description: "",
    iconweather: "",
  });

  // https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${proccess.env.API_KEY}&units=metric
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults({
          cityName: data.city.name,
          temperature: Math.round(data.list[0].main.temp),
          feelsLike: Math.round(data.list[0].main.feels_like),
          country: data.city.country,
          sunrise: data.city.sunrise,
          sunset: data.city.sunset,
          population: data.city.population,
          description: data.list[0].weather[0].description,
          iconweather: data.list[0].weather[0].icon,
        });
      });
  };
  return (
    <div className="app">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results} />
    </div>
  );
}
