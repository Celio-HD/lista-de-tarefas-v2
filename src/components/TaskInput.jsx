import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskInput() {
  const [input, setInput] = useState("");
  const { adicionarTarefa } = useContext(TaskContext);

  const handleAdd = () => {
    adicionarTarefa(input);
    setInput("");
  };

  return (
    <div className="flex gap-3 mb-6">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 border rounded"
        placeholder="Nova tarefa"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
        Adicionar
      </button>
    </div>
  );
}

export default TaskInput;