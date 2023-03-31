import { useState, useEffect, useCallback } from "react";
import { createContext } from "react";

export const ListContext = createContext();

const ListProvider = (props) => {
	const [list, setList] = useState([]);

	const [task, setTask] = useState("");

	const [deadline, setDeadline] = useState();

	const [category, setCategory] = useState("Geral");

	// User custom categories
	const [categories, setCategories] = useState([
		"Geral",
		"Diário",
		"Pessoal",
		"Profissional",
	]);

	// States to filter list

	const [filteredList, setFilteredList] = useState(list);

	const [currentCategory, setCurrentCategory] = useState("Geral");

	// Define the current category based on value received by the button which calls the function

	const filterCategory = useCallback(
		(value) => {
			if (value === "Geral") {
				setFilteredList(list);
			} else {
				const filtered = list.filter((item) => item.category === value);
				setFilteredList(filtered);
			}

			setCurrentCategory(value);
			setCategory(value);
		},
		// Update whenever the full list changes
		[list]
	);

	// Update the filtered list whenever the full list is modified

	useEffect(() => {
		if (currentCategory !== "Geral") {
			const filtered = list.filter((item) => item.category === currentCategory);
			setFilteredList(filtered);
		} else {
			setFilteredList(list);
		}
	}, [list, currentCategory]);

	// Get list from local storage if there's a saved list

	useEffect(() => {
		const savedList = JSON.parse(localStorage.getItem("savedTasks"));
		if (savedList) {
			setList(savedList);
		}
	}, []);

	//Saves the list to local storage. It's called in every function that manipulates the list

	const saveList = (value) =>
		localStorage.setItem("savedTasks", JSON.stringify(value));

	// Functions For user edit the list

	const addTask = () => {
		if (!task) return alert("Insira uma tarefa");
		const newTask = {
			id: Math.random(),
			task: task,
			checked: false,
			deadline: deadline,
			category: category,
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
		category,
		currentCategory,
		setCategory,
		filteredList,
		setFilteredList,
		filterCategory,
		categories,
		setCategories,
	};

	return (
		<ListContext.Provider value={contextValue}>
			{props.children}
		</ListContext.Provider>
	);
};

export default ListProvider;
