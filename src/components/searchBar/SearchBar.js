import React from "react";
import "./searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
	const [city, setCity] = React.useState("");

	console.log(city);
	return (
		<div className="search-bar-container">
			<button className="btn-search">
				<AiOutlineSearch />
			</button>
			<label htmlFor="searchCity">
				<input
					type="text"
					name="searchCity"
					id="searchCity"
					placeholder="Enter City Name..."
					autoFocus
					value={city}
					onChange={(e) => {
						setCity(e.target.value);
					}}
				/>
			</label>
			<button className="btn-search btn-clear">X</button>
		</div>
	);
};

export default SearchBar;
