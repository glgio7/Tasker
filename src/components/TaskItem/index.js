import { TaskContainer } from "./styles";
import { MdOutlineDelete, MdOutlineDone, MdInfo } from "react-icons/md";
import { useState } from "react";

const TaskItem = ({ task, setDone, remove }) => {
	const [taskInfo, setTaskInfo] = useState(false);

	const handleTaskInfo = () => setTaskInfo(!taskInfo);

	return (
		<TaskContainer done={task.checked}>
			<div className="task-description">
				<p>{task.task}</p>
				<div
					className={
						taskInfo
							? "task-description__info active"
							: "task-description__info"
					}
				>
					<h6>Categoria:</h6>
					<span>{task.category} </span>
					<h6>Criado em:</h6>
					<span>{task.createdAt || "Not registered"}</span>
				</div>
				<MdInfo className="task-description__icon" onClick={handleTaskInfo} />
			</div>

			<div className="task-deadline">
				<p>
					{task.checked
						? "Feito"
						: `Prazo: ${task.deadline ? task.deadline : "Nenhum"}`}
				</p>
			</div>

			<div className="task-manager">
				<button onClick={() => setDone(task.id, task.checked)}>
					<MdOutlineDone />
				</button>
				<button onClick={() => remove(task.id)}>
					<MdOutlineDelete />
				</button>
			</div>
		</TaskContainer>
	);
};

export default TaskItem;
