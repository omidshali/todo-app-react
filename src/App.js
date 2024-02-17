import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState(["do homeWork", "washe dishes"]);
  return (
    <div className=" h-screen bg-gradient-to-r from-[#D9AFD9] to-[#97D9E1] p-4">
      <div className="max-w-lg mx-auto h-full bg-gray-100/70 border rounded-lg p-4 shadow-lg ">
        <h1 className="text-center font-bold text-3xl">Todo App</h1>
        <form className="w-full flex justify-between gap-2 mt-4">
          <input
            className="w-full p-2 text-xl"
            placeholder="Add todos"
            type="text"
          />
          <button className="bg-purple-500 text-white px-4 ">
            <FaPlus size={15} />
          </button>
        </form>
        <ul>
          {todos.map((todo, inex) => (
            <Todo key={inex} todo={todo} />
          ))}
        </ul>
        <p className="text-center font-bold">you have {todos.length} todos</p>
      </div>
    </div>
  );
}

export default App;
