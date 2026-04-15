import { useState, useEffect, useMemo } from "react";

function App() {
  const [tarefas, setTarefas] = useState(() => {
    const dados = localStorage.getItem("tarefas");
    return dados ? JSON.parse(dados) : [];
  });

  const [input, setInput] = useState("");

  // salvar no localStorage
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  // memoizar total de tarefas
  const totalTarefas = useMemo(() => {
    return tarefas.length;
  }, [tarefas]);

  // adicionar tarefa
  const adicionarTarefa = () => {
    if (!input) return;

    const novaTarefa = {
      id: Date.now(),
      texto: input,
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput("");
  };

  // remover tarefa
  const removerTarefa = (id) => {
    const novaLista = tarefas.filter((t) => t.id !== id);
    setTarefas(novaLista);
  };

return (
  <div className="min-h-screen bg-slate-50 p-6 md:p-10 font-sans text-slate-900">
    
    {/*Título e Input */}
    <div className="max-w-3xl mx-auto mb-10 p-8 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
      <h1 className="text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
        Lista de Tarefas
      </h1>
      
      <p className="text-sm font-medium text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full mb-8">
        Total de tarefas: <span className="font-bold text-sky-600">{totalTarefas}</span>
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite uma nova tarefa..."
          className=" px-5 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-300 transition"
        />
        <button 
          onClick={adicionarTarefa}
          className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-xl hover:bg-sky-700 transition shadow-md"
        >
          Adicionar
        </button>
      </div>
    </div>

    {/* Bloco da Lista */}
    <ul className="max-w-3xl mx-auto space-y-4">
      {tarefas.map((tarefa) => (
        <li 
          key={tarefa.id}
          className="flex items-center justify-between bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-slate-200 transition group"
        >
          <span className="text-slate-700">{tarefa.texto}</span>
          <button 
            onClick={() => removerTarefa(tarefa.id)}
            className="p-2 rounded-lg bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 transition"
          >
            ❌
          </button>
        </li>
      ))}
    </ul>

  </div>
);}
export default App;
