import React, { useEffect, useState } from "react";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";
import Clouds from "./assets/Clouds.jpg";
import Clear from "./assets/Clear.jpg";
import Rain from "./assets/Rain.jpg";
import Drizzle from "./assets/Drizzle.jpg";
import Thunderstorm from "./assets/Thunderstorm.jpg";
import Snow from "./assets/Snow.jpg";
import Atmosphere from "./assets/Atmosphere.jpg";
import Earth from "./assets/Earth.jpg";

function App() {
	const [loading, setLoading] = useState(true);
	const [bg, setBg] = useState(Earth);
	const [weatherData, setWeatherData] = useState({});
	const [city, setCity] = useState("");
	const [toCelcius, setToCelcius] = useState(true);

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${
		city ? city : "manila"
	}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

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
		if (Object.keys(weatherData).length) {
			if (Object.keys(weatherData).length === 2) {
				setBg(Earth);
			} else {
				if (weatherData.weather[0].main === "Clouds") {
					console.log(bg);
					setBg(Clouds);
				} else if (weatherData.weather[0].main === "Clear") {
					setBg(Clear);
				} else if (weatherData.weather[0].main === "Snow") {
					setBg(Snow);
				} else if (weatherData.weather[0].main === "Rain") {
					setBg(Rain);
				} else if (weatherData.weather[0].main === "Drizzle") {
					setBg(Drizzle);
				} else if (weatherData.weather[0].main === "Thunderstorm") {
					setBg(Thunderstorm);
				} else {
					setBg(Atmosphere);
				}
			}
		}
	}, [weatherData]);

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

	const test = {
		backgroundImage: `url(${bg})`,
	};

	return (
		<div className="app">
			<div className="background" style={test}></div>
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
