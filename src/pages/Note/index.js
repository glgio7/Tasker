import { ListContext } from "../../contexts/ListContext";
import { useContext, useEffect } from "react";
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
		categorie,
		setCategorie,
		filteredList,
	} = useContext(ListContext);

	const [weather, setWeather] = useState(false);

	const toggleWeather = () => setWeather(!weather);

	const submitOnEnter = (props) => (props.keyCode === 13 ? addTask() : "");
	useEffect(() => {}, [list]);

	return (
		<>
			<Toolbar toggleWeather={toggleWeather} clearList={clearList} />
			<Notepad onLoad={() => window.scrollTo(0, 0)}>
				<h2>Notepad</h2>
				<h4>
					<span>{remainingDays}</span> {remainingDays === 1 ? "day" : "days"}{" "}
					left for next month.
				</h4>
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

					<select
						className="categories-selector"
						value={categorie}
						onChange={(e) => setCategorie(e.target.value)}
					>
						<option value={"All"}>Set Categorie</option>
						<option>Daily</option>
						<option>Leisure</option>
						<option>Personal</option>
						<option>Professional</option>
						<option>Financial</option>
					</select>
				</CreateTask>

				<h2 className="list-title">
					{filteredList.length > 0 ? filteredList[0].categorie : "All"}
				</h2>
				<ul>
					{filteredList.length > 0
						? filteredList.map((task) => (
								<TaskItem
									key={task.id}
									task={task}
									remove={removeTask}
									setDone={toggleDone}
								/>
						  ))
						: list.map((task) => (
								<TaskItem
									key={task.id}
									task={task}
									remove={removeTask}
									setDone={toggleDone}
								/>
						  ))}
				</ul>

				{/* ////////////////// Using tool area */}

				<iframe
					src="https://climaki.vercel.app"
					className={weather ? "active" : ""}
					title="weather"
				></iframe>
				<button
					className={weather ? "close-weather active" : "close-weather"}
					onClick={toggleWeather}
				>
					Voltar para Notepad
				</button>
			</Notepad>
		</>
	);
};

export default Note;
