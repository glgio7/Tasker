import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";

export default function Header({ setColor }) {
	return (
		<StyledHeader>
			<Link to={"/"}>
				<h1>
					<img className="logo" src="/img/utasker-logo.png" alt="" />
					<span>Tasker</span>
				</h1>
			</Link>

			<select
				className="color-picker"
				onChange={(e) => {
					if (e.target.value !== "") setColor(e.target.value);
				}}
			>
				<option value="">Mudar tema</option>
				<option value="default">Original</option>
				<option value="lightOrange">Light Mode Orange</option>
				<option value="darkBlue">Dark Mode Blue</option>
			</select>
		</StyledHeader>
	);
}
