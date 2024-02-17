import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./data/firebase";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoinput, setTodoInput] = useState("");
  // read todo from firebase
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    setTodos(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getData();
  }, []);
  // add a todo

  // update a todo
  // delete a todo
  return (
    <div className=" h-screen bg-gradient-to-r from-[#D9AFD9] to-[#97D9E1] p-4">
      <div className="max-w-lg h-full mx-auto bg-gray-100/70 border rounded-lg p-4 shadow-lg ">
        <h1 className="text-center font-bold text-3xl">Todo App</h1>
        <form className="w-full flex justify-between gap-2 mt-4">
          <input onChange={()=>{}}
            className="w-full p-2 text-xl"
            placeholder="Add todos"
            type="text"
          />
          <button className="bg-purple-500 text-white px-4 ">
            <FaPlus size={15} />
          </button>
        </form>
        {todos.length == 0 ? (
          <h2 className="text-2xl font-bold text-center my-5">Loading...</h2>
        ) : (
          <div className="w-full h-full">
            <ul className="">
              {todos.map((todo, inex) => (
                <Todo key={inex} todo={todo} />
              ))}
            </ul>
            <div className="w-full">
              <p className="text-center font-bold ">
                you have {todos.length} todos
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
