import styled from "styled-components";
import { IoMenu, IoPartlySunnyOutline } from "react-icons/io5";
import { VscCalendar, VscClearAll } from "react-icons/vsc";
import { useState } from "react";
import { StyledToolbar } from "./styles";

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
			<StyledToolbar open={isOpen}>
				<button>
					<IoMenu
						className="action-icon__menu"
						onClick={() => setIsOpen(!isOpen)}
					/>
				</button>
				<button>
					<IoPartlySunnyOutline
						className="widget-icon"
						onClick={toggleWeather}
					/>
				</button>
				<button>
					<VscCalendar className="widget-icon" onClick={toggleDate} />
				</button>
				<div className={shownDate ? "calendar active" : "calendar"}>
					<h3>Month</h3>
					<p>{month}</p>
					<h3>Day</h3>
					<p>{day}</p>
					<h3>Year</h3>
					<p>{year}</p>
				</div>
				<button>
					<VscClearAll className="widget-icon" onClick={clearList} />
				</button>
			</StyledToolbar>
		</>
	);
}
