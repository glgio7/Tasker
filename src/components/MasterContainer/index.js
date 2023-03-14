import Footer from "../Footer";
import Header from "../Header";
import { Container } from "./styles";

const MasterContainer = ({ children }) => {
	return (
		<>
			<Header />
			<Container>
				<div className="background"></div>
				{children}
			</Container>
			<Footer />
		</>
	);
};

export default MasterContainer;
