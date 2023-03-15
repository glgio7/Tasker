import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";

export default function Header() {
	const userLocation = window.location.toString();

	return (
		<StyledHeader>
			<Link to={"/"}>
				<h1>
					<img className="logo" src="/utasker-logo.png" alt="" />
					<span>Tasker</span>
				</h1>
			</Link>
			<Link to={"/notepad"} className="button-iniciar">
				{userLocation.includes("/notepad") ? "Notepad" : "Iniciar"}
			</Link>
		</StyledHeader>
	);
}
