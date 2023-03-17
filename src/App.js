import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalCSS } from "./styles/cssreset";
import Home from "./pages/Home";
import Note from "./pages/Note";
import ListProvider from "./contexts/ListContext";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalCSS />
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
		</BrowserRouter>
	);
};

export default App;
