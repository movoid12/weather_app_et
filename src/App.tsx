import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results'
import { useState } from 'react'

type ResultsStateType = {
  country: string,
  cityName: string,
  temperature: string,
  conditionText: string
  icon: string
}

function App() {
  const [city, setCity] = useState<string>('')
  const [results, setResults] = useState<ResultsStateType>({
    country: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: ''
  })
// https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${proccess.env.API_KEY}&units=metric
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${proccess.env.API_KEY}&units=metric`)
      .then(res => res.json())
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
      })
  }

  return (

    <div className="app">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results} />
    </div>
  );
}

export default App;
