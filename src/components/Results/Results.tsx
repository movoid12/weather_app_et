import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type ResultsProps = {
  results: {
    cityName: string;
    temperature: number;
    feelsLike: number;
    country: string;
    description: string;
    iconweather: string;
  };
};

// set sunset and sunrise as date data type and convert it to local time
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString


export default function Results({ results }: ResultsProps) {
  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="70"
        image={`http://openweathermap.org/img/w/${results.iconweather}.png`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {results.cityName} °C
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {results.temperature} °C
        </Typography>
      </CardContent>
    </Card>

      <h2>Stadt: {results.cityName}</h2>
      <h2>Tempurature: {results.temperature} °C</h2>
      <h2>Gefühlt: {results.feelsLike} °C</h2>
      <h2>Land: {results.country}</h2>
      <h2>Wetter: {results.description}</h2>
      <img src={`http://openweathermap.org/img/w/${results.iconweather}.png`} alt="weather" />
    </div>
  );
}
