

type ResultsProps = {
    results: {
        cityName: string;
        temperature: number;
        feelsLike: number;
        country: string;
        sunrise: number;
        sunset: number;
        population: number;
        description: string;
    }
}

export default function Results({ results }: ResultsProps) {
// list all the results in the results component and display them in the browser
    return (
        <div>
            <h2>Stadt: {results.cityName}</h2>
            <h2>Tempurature: {results.temperature} °C</h2>
            <h2>Gefühlt: {results.feelsLike} °C</h2>
            <h2>Land: {results.country}</h2>
            <h2>Sonneausgang: {results.sunrise}</h2>
            <h2>Sonneenuntergagn: {results.sunset}</h2>
            <h2>Einwohner: {results.population}</h2>
        </div>
    );
}

