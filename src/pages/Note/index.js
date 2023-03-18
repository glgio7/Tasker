import { ListContext } from "../../contexts/ListContext";
import { useContext } from "react";
import { useState } from "react";
import { Notepad, CreateTask } from "./styles";
import TaskItem from "../../components/TaskItem";
import { remainingDays, Toolbar } from "../../components/Toolbar";

const Note = () => {
	const {
		task,
		setTask,
		deadline,
		setDeadline,
		list,
		clearList,
		addTask,
		removeTask,
		toggleDone,
	} = useContext(ListContext);

	const [weather, setWeather] = useState(false);

	const toggleWeather = () => setWeather(!weather);

	const submitOnEnter = (props) => (props.keyCode === 13 ? addTask() : "");

	return (
		<>
			<Toolbar toggleWeather={toggleWeather} clearList={clearList} />
			<Notepad>
				<h2>Notepad</h2>
				<h4>
					<span style={{ color: "firebrick", fontWeight: "bold" }}>
						{remainingDays}
					</span>{" "}
					{remainingDays === 1 ? "day" : "days"} left for next month.
				</h4>
				<iframe
					src="https://climaki.vercel.app"
					className={weather ? "active" : ""}
					title="weather"
					crossOrigin="anonymous"
				></iframe>
				<button
					className={weather ? "close-weather active" : "close-weather"}
					onClick={toggleWeather}
				>
					{" "}
					Voltar para Notepad
				</button>

				<CreateTask>
					<input
						type="text"
						value={task}
						onChange={(e) => setTask(e.target.value)}
						onKeyDown={(e) => submitOnEnter(e)}
					/>
					<select
						value={deadline}
						onChange={(e) => setDeadline(e.target.value)}
					>
						<option value="">Set deadline (in days)</option>
						<option>1 day</option>
						<option>2 days</option>
						<option>3 days</option>
						<option>4 days</option>
						<option>5 days</option>
					</select>
					<button onClick={addTask}>Add</button>
				</CreateTask>

				<ul>
					{list.map((task) => (
						<TaskItem
							key={task.id}
							task={task}
							remove={removeTask}
							setDone={toggleDone}
						/>
					))}
				</ul>
			</Notepad>
		</>
	);
};

export default Note;
