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
					localStorage.setItem(
						"preferredTheme",
						JSON.stringify(e.target.value)
					);
				}}
			>
				<option value="">Theme</option>
				<option value="default">Original</option>
				<option value="darkModeOrange">Dark Mode Orange</option>
				<option value="darkModeBlue">Dark Mode Blue</option>
				<option value="darkModePurple">Dark Mode Purple</option>
				<option value="lightModeOrange">Light Mode Orange</option>
				<option value="lightModeGreen">Light Mode Green</option>
				<option value="lightModePurple">Light Mode Purple</option>
			</select>
		</StyledHeader>
	);
}
