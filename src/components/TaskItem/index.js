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
				<div className={taskInfo ? "task-info active" : "task-info"}>
					<p
						className={
							taskInfo
								? "task-info__description active"
								: "task-info__description"
						}
					>
						{task.category}
					</p>
					<MdInfo className="task-info__icon" onClick={handleTaskInfo} />
				</div>
			</div>
			<span>
				{task.checked
					? "Feito"
					: `Prazo: ${task.deadline ? task.deadline : "Nenhum"}`}
			</span>
			<div className="edit-box">
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
