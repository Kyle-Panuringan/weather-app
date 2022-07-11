import React from "react";
import "./searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ city, setCity, handleSearch }) => {
	return (
		<div className="search-bar-container">
			<form onSubmit={handleSearch}>
				<button className="btn-search" type="submit">
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
			</form>
			<button
				className={`btn-search btn-clear ${city && "btn-active"}`}
				onClick={() => {
					setCity("");
				}}
			>
				X
			</button>
		</div>
	);
};

export default SearchBar;
