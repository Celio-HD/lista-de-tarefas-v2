import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskItem({ tarefa }) {
  const { removerTarefa, toggleTarefa } = useContext(TaskContext);

  return (
    <li className="flex justify-between bg-white p-4 rounded shadow">
      
      {/* TEXTO CLICÁVEL */}
      <span
        onClick={() => toggleTarefa(tarefa.id)}
        className={
          tarefa.concluida
            ? "line-through cursor-pointer text-gray-400"
            : "cursor-pointer"
        }
      >
        {tarefa.texto}
      </span>

      {/* BOTÕES */}
      <div className="flex gap-2">
        <button onClick={() => toggleTarefa(tarefa.id)} className="bg-green-500 text-white px-2 py-1 rounded">
          ✔
        </button>

        <button onClick={() => removerTarefa(tarefa.id)} className="bg-red-500 text-white px-2 py-1 rounded">
          ❌
        </button>
      </div>
    </li>
  );
}

export default TaskItem;