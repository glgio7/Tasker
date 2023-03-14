import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";

export default function Header() {
	return (
		<StyledHeader>
			<Link to={"/"}>
				<h1>
					<img className="logo" src="/utasker-logo.png" alt="" />
					<span>Tasker</span>
				</h1>
			</Link>
			<Link to={"/notepad"} className="button-iniciar">
				Iniciar
			</Link>
		</StyledHeader>
	);
}
