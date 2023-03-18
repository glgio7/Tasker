import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalCSS } from "./styles/cssreset";
import ListProvider from "./contexts/ListContext";
import Home from "./pages/Home";
import Note from "./pages/Note";
import Container from "./styles/app";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";

const themes = {
	default: {
		primaryColor: "#7d0103",
		secondaryColor: "#f22222",
		backgroundColor: "#101010",
		buttonBackgroundColor: "#b22222",
		containerColor: "#151515",
		divColor: "#101010",
		textColor: "#fff",
	},
};

const App = () => {
	return (
		<BrowserRouter>
			<GlobalCSS />
			<ThemeProvider theme={themes["default"]}>
				<Header />
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
