import { useState, useEffect } from "react";
import { createContext } from "react";

export const ListContext = createContext();

const ListProvider = (props) => {
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

	const contextValue = {
		task,
		setTask,
		deadline,
		setDeadline,
		list,
		clearList,
		addTask,
		removeTask,
		toggleDone,
	};

	return (
		<ListContext.Provider value={contextValue}>
			{props.children}
		</ListContext.Provider>
	);
};

export default ListProvider;
