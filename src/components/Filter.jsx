import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Filter() {
  const { filtro, setFiltro } = useContext(TaskContext);

  const base =
    "px-4 py-2 rounded-xl font-medium transition duration-200";

  const ativo = "bg-sky-600 text-white shadow-md";
  const inativo =
    "bg-slate-100 text-slate-600 hover:bg-slate-200";

  return (
    <div className="flex gap-3 mb-6 justify-center">
      <button
        onClick={() => setFiltro("todas")}
        className={`${base} ${
          filtro === "todas" ? ativo : inativo
        }`}
      >
        Todas
      </button>

      <button
        onClick={() => setFiltro("concluidas")}
        className={`${base} ${
          filtro === "concluidas" ? ativo : inativo
        }`}
      >
        Concluídas
      </button>

      <button
        onClick={() => setFiltro("pendentes")}
        className={`${base} ${
          filtro === "pendentes" ? ativo : inativo
        }`}
      >
        Pendentes
      </button>
    </div>
  );
}

export default Filter;