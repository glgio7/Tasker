import { ListContext } from "../../contexts/ListContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Notepad, CreateTask } from "./styles";
import TaskItem from "../../components/TaskItem";
import { remainingDays, Toolbar } from "../../components/Toolbar";
import ToolViewer from "../../components/ToolViewer";

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
		category,
		setCategory,
		filteredList,
		currentCategory,
		categories,
	} = useContext(ListContext);

	const [weather, setWeather] = useState(false);
	const [calc, setCalc] = useState(false);

	const toggleWeather = () => {
		setWeather(!weather);
		setCalc(false);
	};
	const toggleCalc = () => {
		setCalc(!calc);
		setWeather(false);
	};

	const closeToolViewer = () => {
		setCalc(false);
		setWeather(false);
	};

	const submitOnEnter = (props) => (props.keyCode === 13 ? addTask() : "");
	useEffect(() => {}, [list]);

	return (
		<>
			<Toolbar
				toggleWeather={toggleWeather}
				toggleCalc={toggleCalc}
				clearList={clearList}
			/>
			<Notepad onLoad={() => window.scrollTo(0, 0)}>
				<h2>Notas</h2>
				<h4>
					<span>{remainingDays}</span> {remainingDays === 1 ? "dia" : "dias"}{" "}
					para o próximo mês.
				</h4>

				{/* Create Task container */}
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
						<option value="">Prazo</option>
						<option>1 dia</option>
						<option>2 dias</option>
						<option>3 dias</option>
						<option>4 dias</option>
						<option>5 dias</option>
					</select>
					<button onClick={addTask}>Add</button>

					<select
						className="categories-selector"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value={"Geral"}>Definir categoria</option>
						{categories.map((item) => {
							return (
								<option key={item} value={item}>
									{item}
								</option>
							);
						})}
					</select>
				</CreateTask>

				{/* List of tasks container */}
				<h2 className="list-title">{currentCategory}</h2>
				<ul>
					{filteredList &&
						filteredList.map((task) => (
							<TaskItem
								key={task.id}
								task={task}
								remove={removeTask}
								setDone={toggleDone}
							/>
						))}
				</ul>

				{/* Weather iframe */}
				<ToolViewer
					tool={weather}
					title={"Clima"}
					src={"https://climaki.vercel.app"}
					onClick={closeToolViewer}
				/>
				<ToolViewer
					tool={calc}
					title={"Calculadora"}
					src={"https://dio-calculator-six.vercel.app/"}
					onClick={closeToolViewer}
				/>
			</Notepad>
		</>
	);
};

export default Note;
