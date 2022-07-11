import React from "react";
import "./weatherinfo.css";
import Timer from "../time/Timer";
import SearchBar from "../searchBar/SearchBar";
import { GiDroplets } from "react-icons/gi";
import { BiWind } from "react-icons/bi";
import { RiTempColdLine } from "react-icons/ri";
import { IoCloudSharp } from "react-icons/io5";
const WeatherInfo = ({ weatherData }) => {
	return (
		<div className="weather-info-container">
			<Timer />
			<hr />
			<SearchBar />
			<hr />
			<div className="weather-info-contents">
				<div className="weather-info-header">
					<h2>Tokyo</h2>
					<p>(JP)</p>
				</div>
				<hr className="hr-short" />
				<div className="weather-info-main">
					<div className="temperature">
						<p>
							<RiTempColdLine /> Temperature
						</p>
						<p>{`${Math.round(
							((weatherData.main.temp - 32) * 5) / 9
						)}°C | ${Math.round(weatherData.main.temp)}°F`}</p>
					</div>
					<div className="humidity">
						<p>
							<GiDroplets /> Humidity
						</p>
						<p>{weatherData.main.humidity}%</p>
					</div>
					<div className="wind">
						<p>
							<BiWind /> Wind
						</p>
						<p>{weatherData.wind.speed.toFixed()} mph</p>
					</div>
					<div className="clouds">
						<p>
							<IoCloudSharp /> Clouds
						</p>
						<p>{weatherData.clouds.all}%</p>
					</div>
				</div>
				<hr className="hr-short" />
				<p className="weather-description">
					<i>"{weatherData.weather[0].description}"</i>
				</p>
			</div>
		</div>
	);
};

export default WeatherInfo;
