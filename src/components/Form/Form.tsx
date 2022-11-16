import React from 'react';

type FormProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ setCity, getWeather }: FormProps) {
  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}
