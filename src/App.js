import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalCSS } from "./styles/cssreset";
import ListProvider from "./contexts/ListContext";
import Home from "./pages/Home";
import Note from "./pages/Note";
import Container from "./styles/app";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const themes = {
	default: {
		backgroundColor: "#101010",
		primaryColor: "#ac0000",
		containerColor: "#151515",
		buttonColor: "#b22222",
		textColor: "#fff",
		buttonTextColor: "#fff",
	},
	darkModeBlue: {
		backgroundColor: "#101010",
		primaryColor: "#0079d9",
		containerColor: "#151515",
		buttonColor: "#00a7e7",
		textColor: "#fff",
		buttonTextColor: "#fff",
	},
	darkModeOrange: {
		backgroundColor: "#101010",
		primaryColor: "#ff6f00",
		containerColor: "#151515",
		buttonColor: "#ff8800",
		textColor: "#fff",
		buttonTextColor: "#000",
	},
	lightModeOrange: {
		backgroundColor: "#ddd",
		primaryColor: "#ff6f00",
		containerColor: "#fff",
		textColor: "#000",
		buttonColor: "#ff8800",
		buttonTextColor: "#fff",
	},

	lightModePurple: {
		backgroundColor: "#ddd",
		primaryColor: "#6a0dad",
		containerColor: "#fff",
		textColor: "#000",
		buttonColor: "#ad4dff",
		buttonTextColor: "#fff",
	},
	darkModePurple: {
		backgroundColor: "#101010",
		primaryColor: "#6a0dad",
		containerColor: "#151515",
		textColor: "#fff",
		buttonColor: "#ad4dff",
		buttonTextColor: "#fff",
	},
	lightModeGreen: {
		backgroundColor: "#ddd",
		primaryColor: "#008000",
		containerColor: "#fff",
		textColor: "#000",
		buttonColor: "#00aa47",
		buttonTextColor: "#fff",
	},
};

const App = () => {
	const preferredTheme = JSON.parse(localStorage.getItem("preferredTheme"));

	const [color, setColor] = useState(
		preferredTheme ? preferredTheme : "default"
	);

	return (
		<BrowserRouter>
			<ListProvider>
				<GlobalCSS />
				<ThemeProvider theme={themes[color]}>
					<Header setColor={setColor} />
					<Container>
						<div className="background"></div>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/notepad" element={<Note />} />
						</Routes>
					</Container>
					<Footer />
				</ThemeProvider>
			</ListProvider>
		</BrowserRouter>
	);
};

export default App;
