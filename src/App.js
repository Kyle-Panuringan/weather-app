import React, { useEffect, useState } from "react";
import WeatherHeader from "./components/weatherHeader/WeatherHeader";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";

const weatherData = {
	coord: { lon: 139.6917, lat: 35.6895 },
	weather: [
		{ id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
	],
	base: "stations",
	main: {
		temp: 91.9,
		feels_like: 100.62,
		temp_min: 86.67,
		temp_max: 95.79,
		pressure: 1007,
		humidity: 54,
	},
	visibility: 10000,
	wind: { speed: 8.05, deg: 150 },
	clouds: { all: 75 },
	dt: 1657513289,
	sys: {
		type: 2,
		id: 2038398,
		country: "JP",
		sunrise: 1657481626,
		sunset: 1657533548,
	},
	timezone: 32400,
	id: 1850144,
	name: "Tokyo",
	cod: 200,
};

function App() {
	// const [weatherData, setWeatherData] = useState("");
	const [city, setCity] = useState("Manila");
	const [toCelcius, setToCelcius] = useState(true);
	// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=b21767305eed49ae65ced8e0026fe6bb`;

	// const getCity = async () => {
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	setWeatherData(data);
	// };

	// useEffect(() => {
	// 	getCity();
	// }, []);

	const temperatureSwitch = (temp) => {
		if (temp === "C") {
			setToCelcius(true);
		} else if (temp === "F") {
			setToCelcius(false);
		}
	};

	return (
		<div className="App">
			<WeatherHeader
				weatherData={weatherData}
				toCelcius={toCelcius}
				temperatureSwitch={temperatureSwitch}
			/>
			<WeatherInfo />
		</div>
	);
}

export default App;
