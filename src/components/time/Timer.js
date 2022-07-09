import React from "react";
import "./timer.css";

const Timer = () => {
	const [clock, setClock] = React.useState();
	const [today, setToday] = React.useState();

	React.useEffect(() => {
		const weekdays = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		const interval = setInterval(() => {
			const date = new Date();
			const year = date.getFullYear();
			const month = date.getMonth();
			const currentdate = date.getDate();
			const weekday = weekdays[date.getDay()];
			const time = date.toLocaleTimeString();
			setClock(time);
			setToday(`${weekday}, ${month}/${currentdate}/${year}`);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="timer-container">
			<h1>{clock}</h1>
			<h2>{today}</h2>
		</div>
	);
};

export default Timer;
