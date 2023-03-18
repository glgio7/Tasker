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
		primaryColor: "#7d0103",
		secondaryColor: "#f22222",
		backgroundColor: "#101010",
		buttonBackgroundColor: "#b22222",
		containerColor: "#151515",
		textColor: "#fff",
		logoColor: "#fff",
	},
	darkBlue: {
		primaryColor: "#0079d9",
		secondaryColor: "#008eff",
		backgroundColor: "#101010",
		buttonBackgroundColor: "#00a7e7",
		containerColor: "#151515",
		textColor: "#fff",
		logoColor: "#fff",
	},
	lightOrange: {
		primaryColor: "#ff6f00",
		secondaryColor: "#ff8800",
		backgroundColor: "#ddd",
		buttonBackgroundColor: "#ff9500",
		containerColor: "#fff",
		textColor: "#000",
		logoColor: "#fff",
	},
};

const App = () => {
	const [color, setColor] = useState("default");

	return (
		<BrowserRouter>
			<GlobalCSS />
			<ThemeProvider theme={themes[color]}>
				<Header setColor={setColor} />
				<Container>
					<div className="background"></div>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route
							exact
							path="/notepad"
							element={
								<ListProvider>
									<Note />
								</ListProvider>
							}
						/>
					</Routes>
				</Container>
				<Footer />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
