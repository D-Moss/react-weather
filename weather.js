import React, { useState } from "react";
import WeatherInfo from ".weatherInfo";
import WeatherForecast from "weatherForecast";
import axios from "axios";
import "weather.css";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	function handleResponse(response) {
		setWeatherData( {
			ready: true,
			coordinates: response.data.coord,
			temperature: response.data.main.temp,
			humidity: response.data.main.humidity,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
			wind: response.data.wind.speed,
			city: response.data.name,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}
	function handleCityChange(event) {
		setCity(event.target.value);
	}
}