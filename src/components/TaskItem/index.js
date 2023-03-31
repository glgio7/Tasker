import { TaskContainer } from "./styles";
import { MdOutlineDelete, MdOutlineDone } from "react-icons/md";

const TaskItem = ({ task, setDone, remove }) => {
	return (
		<TaskContainer done={task.checked}>
			<p>{task.task}</p>
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
