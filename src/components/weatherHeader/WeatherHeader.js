import React from "react";
import "./weatherHeader.css";

const WeatherHeader = ({ weatherData, toCelcius, temperatureSwitch }) => {
	return (
		<div className="weather-header-container">
			<h1>{weatherData.name}</h1>
			<div className="weather-header-body-container">
				<img
					src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
					alt={weatherData.weather[0].main}
				/>
				<div className="weather-header-body-container">
					<h2>
						{toCelcius
							? Math.round(((weatherData.main.temp - 32) * 5) / 9)
							: Math.round(weatherData.main.temp)}
					</h2>
					<button
						className={`${
							toCelcius
								? "temperature-button celcius"
								: "temperature-button"
						}`}
						onClick={() => {
							temperatureSwitch("C");
						}}
					>
						°C
					</button>
					<button
						className={`${
							!toCelcius
								? "temperature-button farenheit"
								: "temperature-button"
						}`}
						onClick={() => {
							temperatureSwitch("F");
						}}
					>
						°F
					</button>
				</div>
			</div>
		</div>
	);
};

export default WeatherHeader;
