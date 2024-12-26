import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Weather defaultCity="New York" />

				<footer>
					This project was coded body
					<a href="https://codepen.io/Diona-Moss"
					target="_blank"> Diona </a>
					and is
					<a href="https://github.com/D-Moss"
					target="_blank"> on GitHub </a>
					and
					<a href="https://app.netlify.com/teams/d-moss-o8d9vci/overview"
					target="_blank"
					>
					hosted on Netlify
					</a>
				</footer>
			</div>
		</div>
	);
}