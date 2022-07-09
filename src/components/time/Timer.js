import React from "react";
import "./timer.css";

const Timer = () => {
	const [clock, setClock] = React.useState();

	React.useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date();
			console.log("Date", date);
			setClock(date.toLocaleTimeString());
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="timer-container">
			<h1>{clock}</h1>
		</div>
	);
};

export default Timer;
