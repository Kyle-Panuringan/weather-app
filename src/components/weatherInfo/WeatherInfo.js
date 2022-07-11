import React from "react";
import "./weatherinfo.css";
import Timer from "../time/Timer";
import SearchBar from "../searchBar/SearchBar";
import { GiDroplets } from "react-icons/gi";
import { BiWind } from "react-icons/bi";
import { RiTempColdLine } from "react-icons/ri";
import { IoCloudSharp } from "react-icons/io5";
const WeatherInfo = ({
	weatherData,
	toCelcius,
	temperatureSwitch,
	city,
	setCity,
	handleSearch,
}) => {
	return (
		<div>
			<div className="weather-info-bg"></div>
			<div className="weather-info-container">
				<Timer />
				<hr />
				<SearchBar
					city={city}
					setCity={setCity}
					handleSearch={handleSearch}
				/>
				<hr />
				<div className="weather-info-contents">
					{/* Head */}
					{Object.keys(weatherData).length > 2 && (
						<div className="weather-header-container">
							<h1>
								{weatherData.name}{" "}
								<sup>({weatherData.sys.country})</sup>
							</h1>

							<div className="weather-header-body-container">
								<img
									src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
									alt={weatherData.weather[0].main}
								/>

								<div className="weather-header-main-container">
									<h2>
										{toCelcius
											? Math.round(
													((weatherData.main.temp -
														32) *
														5) /
														9
											  )
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
					)}
					{/* If the object(weatherData) is equal to 2, it means 404 error */}
					{Object.keys(weatherData).length === 2 && (
						<div id="error-message">
							<h3>{weatherData.message}</h3>
							<h3>....</h3>
						</div>
					)}
					{Object.keys(weatherData).length > 2 && (
						<div>
							{/* Temp Head */}
							<div className="temp-head">
								<h3>{weatherData.name}</h3>
								<h6>({weatherData.sys.country})</h6>
							</div>
							{/* Main */}
							<div className="weather-info-main">
								<div className="temperature">
									<p>
										<RiTempColdLine /> Temperature
									</p>
									<p>{`${Math.round(
										((weatherData.main.temp - 32) * 5) / 9
									)}°C | ${Math.round(
										weatherData.main.temp
									)}°F`}</p>
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
									<p>
										{weatherData.wind.speed.toFixed()} mph
									</p>
								</div>
								<div className="clouds">
									<p>
										<IoCloudSharp /> Clouds
									</p>
									<p>{weatherData.clouds.all}%</p>
								</div>
							</div>

							<p className="weather-description">
								<i>"{weatherData.weather[0].description}"</i>
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default WeatherInfo;
