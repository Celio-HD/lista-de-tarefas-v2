import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Minhas Tarefas</h1>

      <TaskInput />
      <Filter />
      <TaskList />
    </div>
  );
}

export default App;