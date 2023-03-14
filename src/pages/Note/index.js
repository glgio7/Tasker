// import { useState } from "react";
import { Item } from "../../components/TaskItem";
import { remainingDays, Toolbar } from "../../components/Toolbar";
import { CreateTask, Notepad } from "./styles";
import { MdOutlineDelete, MdOutlineDone } from "react-icons/md";
import { VscTriangleUp } from "react-icons/vsc";
import { useState, useEffect } from "react";
import MasterContainer from "../../components/MasterContainer";

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

	const [tip, setTip] = useState(false);
	const toggleTip = () => setTip(!tip);
	return (
		<>
			<MasterContainer onload={() => window.scrollTo(0, 0)}>
				<Toolbar toggleWeather={toggleWeather} clearList={clearList} />
				<Notepad>
					<h2>
						<span>Notepad</span>
						<p>
							<span style={{ color: "firebrick", fontWeight: "bold" }}>
								{remainingDays}
							</span>{" "}
							{remainingDays === 1 ? "day" : "days"} left for next month.
						</p>
					</h2>
					{/* Tenho encontrado erros de cookies de terceiros no iFrame, isso será resolvido em breve */}
					<iframe
						src="https://climaki.vercel.app"
						className={weather ? "active" : ""}
						title="weather"
						crossOrigin="anonymous"
					></iframe>
					<ul>
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
								<option>1d</option>
								<option>2d</option>
								<option>3d</option>
								<option>4d</option>
								<option>5d</option>
							</select>
							<button onClick={addTask}>Add</button>
						</CreateTask>
						{list.map((task) => (
							<Item key={task.id} checked={task.checked}>
								<p>{task.task}</p>
								<div className="edit">
									<p>
										{task.checked
											? "Done"
											: `Deadline: ${task.deadline ? task.deadline : "Nope"}`}
									</p>
								</div>
								<div className="edit">
									<button
										className="done"
										onClick={() => toggleDone(task.id, task.checked)}
									>
										<MdOutlineDone />
									</button>
									<button>
										<MdOutlineDelete onClick={() => removeTask(task.id)} />
									</button>
								</div>
							</Item>
						))}
					</ul>
					<div className="tip" onClick={toggleTip}>
						<span>Tip</span>
						<VscTriangleUp style={{ color: "#fff" }} />
						<p className={tip ? "" : "hidden-tip"}>
							Depending on whether your task is an indoor or outdoor task you
							should check the weather forecast.
						</p>
					</div>
				</Notepad>
			</MasterContainer>
		</>
	);
}
