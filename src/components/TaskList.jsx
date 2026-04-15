import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tarefas } = useContext(TaskContext);

  return (
    <ul className="space-y-3">
      {tarefas.map((t) => (
        <TaskItem key={t.id} tarefa={t} />
      ))}
    </ul>
  );
}

export default TaskList;