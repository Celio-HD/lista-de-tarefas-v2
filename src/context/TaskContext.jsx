import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tarefas, setTarefas] = useLocalStorage("tarefas", []);
  const [filtro, setFiltro] = useLocalStorage("filtro", "todas");

  const adicionarTarefa = (texto) => {
    if (!texto) return;

    const nova = {
      id: Date.now(),
      texto,
      concluida: false,
    };

    setTarefas((prev) => [...prev, nova]);
  };

  const removerTarefa = (id) => {
    setTarefas((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTarefa = (id) => {
    setTarefas((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  };

  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === "concluidas") return t.concluida;
    if (filtro === "pendentes") return !t.concluida;
    return true;
  });

  return (
    <TaskContext.Provider
      value={{
        tarefas: tarefasFiltradas,
        adicionarTarefa,
        removerTarefa,
        toggleTarefa,
        filtro,
        setFiltro,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}