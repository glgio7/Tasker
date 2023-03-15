import { IoMenu, IoPartlySunnyOutline } from "react-icons/io5";
import { VscCalendar, VscClearAll } from "react-icons/vsc";
import { useState } from "react";
import { ToolbarContainer } from "./styles";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const lastDay = JSON.stringify(new Date(year, month, 0)).slice(9, 11);

export const remainingDays = parseInt(lastDay) - parseInt(day) + 1;

export function Toolbar({ toggleWeather, clearList }) {
	const [isOpen, setIsOpen] = useState(false);

	const [shownDate, setShownDate] = useState(false);
	const toggleDate = () => setShownDate(!shownDate);
	return (
		<>
			<ToolbarContainer open={isOpen}>
				<button
					className="action-icon__menu"
					onClick={() => {
						setIsOpen(!isOpen);
						if (shownDate) setShownDate(false);
					}}
				>
					<IoMenu className="action-icon__menu" />
					<span>Menu</span>
				</button>
				<button
					onClick={() => {
						toggleWeather();
						setIsOpen(false);
					}}
				>
					<IoPartlySunnyOutline className="action-icon" />
					<span>Clima</span>
				</button>
				<button onClick={toggleDate}>
					<VscCalendar className="action-icon" />
					<span>Data</span>
				</button>
				{shownDate && (
					<div>
						<h3>Month</h3>
						<p>{month}</p>
						<h3>Day</h3>
						<p>{day}</p>
						<h3>Year</h3>
						<p>{year}</p>
					</div>
				)}
				<button
					onClick={() => {
						clearList();
						setIsOpen(false);
					}}
				>
					<VscClearAll className="action-icon" />
					<span>Limpar lista</span>
				</button>
			</ToolbarContainer>
		</>
	);
}
