import MasterContainer from "../../components/MasterContainer";
import { useState, useEffect } from "react";
import { Notepad, CreateTask } from "./styles";
import { remainingDays, Toolbar } from "../../components/Toolbar";
import TaskItem from "../../components/TaskItem";

export default function Note() {
	const [task, setTask] = useState("");

	const [list, setList] = useState([]);

	const [deadline, setDeadline] = useState();

	useEffect(() => {
		const savedList = JSON.parse(localStorage.getItem("savedTasks"));
		if (savedList) {
			setList(savedList);
		}
	}, []);

	const saveList = (value) =>
		localStorage.setItem("savedTasks", JSON.stringify(value));

	const addTask = () => {
		if (!task) return alert("Insira uma tarefa");
		const newTask = {
			id: Math.random(),
			task: task,
			checked: false,
			deadline: deadline,
		};
		setList([...list, newTask]);
		setTask("");
		setDeadline("");
		saveList([...list, newTask]);
		// A idéia é que toda interação no site realize um salvamento no Local Storage, ao executar a função o código acima é executado.
		// localStorage.setItem('savedTasks', JSON.stringify([...list, newTask]));
		// Como toda interação com a lista gera uma nova lista que substitui a original. Para não precisar repetir o código acima, criei uma função que recebe como parametro a nova lista a ser salva no LocalStorage.
		// Ao iniciar a página, um useEffect é executado e retorna a ultima lista salva, caso existente.
	};
	const removeTask = (id) => {
		const newList = list.filter((task) => task.id !== id);
		setList(newList);
		saveList(newList);
	};
	const toggleDone = (id, checked) => {
		const index = list.findIndex((task) => task.id === id);
		const checkStatus = list;
		checkStatus[index].checked = !checked;
		setList([...checkStatus]);
		saveList([...checkStatus]);
	};
	const clearList = () => {
		const defaultList = [];
		if (window.confirm("Are you sure you want to delete all tasks?")) {
			setList(defaultList);
			saveList(defaultList);
		}
	};

	const [weather, setWeather] = useState(false);
	const toggleWeather = () => setWeather(!weather);
	const submitOnEnter = (props) => (props.keyCode === 13 ? addTask() : "");

	return (
		<>
			<MasterContainer onload={() => window.scrollTo(0, 0)}>
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
								checked={task.checked}
								task={task}
								remove={removeTask}
								setDone={toggleDone}
							/>
						))}
					</ul>
				</Notepad>
			</MasterContainer>
		</>
	);
}
