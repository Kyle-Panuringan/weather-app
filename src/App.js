import React, { useEffect, useState } from "react";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";

function App() {
	const [loading, setLoading] = useState(true);
	const [weatherData, setWeatherData] = useState({});
	const [city, setCity] = useState("");
	const [toCelcius, setToCelcius] = useState(true);
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${
		city ? city : "manila"
	}&units=imperial&appid=b21767305eed49ae65ced8e0026fe6bb`;

	const getWeather = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setWeatherData(data);
			setLoading(false);
		} catch (error) {
			console.log("You got an Error", error);
		}
	};

	useEffect(() => {
		getWeather();
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
		getWeather();
	};

	const temperatureSwitch = (temp) => {
		if (temp === "C") {
			setToCelcius(true);
		} else if (temp === "F") {
			setToCelcius(false);
		}
	};

	return (
		<div className="App">
			{loading && <h1>Loading...</h1>}
			<WeatherInfo
				loading={loading}
				weatherData={weatherData}
				toCelcius={toCelcius}
				temperatureSwitch={temperatureSwitch}
				city={city}
				setCity={setCity}
				handleSearch={handleSearch}
			/>
		</div>
	);
}

export default App;
