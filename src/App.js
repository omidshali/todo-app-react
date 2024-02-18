import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  query,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./data/firebase";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoinput, setTodoInput] = useState("");

  // read todo from firebase
  const getData = async () => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });

    // const querySnapshot = await getDocs(collection(db, "todos"));
    // setTodos(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getData();
  }, []);
  // add a todo
  const addTodo = async (e) => {
    e.preventDefault(e);
    if (todoinput === "") return;
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        text: todoinput,
        isCompleted: false,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setTodoInput("");
  };
  // update a todo
  const updateState = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      isCompleted: !todo.isCompleted,
    });
  };
  // delete a todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div className="max-h-screen h-screen bg-gradient-to-r from-[#D9AFD9] to-[#97D9E1] p-4">
      <div className="max-w-lg flex flex-col  mx-auto bg-gray-100/60 border rounded-lg p-4 shadow-lg ">
        <h1 className="text-center font-bold text-3xl">Todo App</h1>
        <form
          onSubmit={addTodo}
          className="w-full flex justify-between gap-2 mt-4"
        >
          <input
            value={todoinput}
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
            className="w-full p-2 text-xl"
            placeholder="Add todos"
            type="text"
          />
          <button type="submit" className="bg-purple-500 text-white px-4 ">
            <FaPlus size={15} />
          </button>
        </form>
        <div className=" w-full ">
          <main className="overflow-y-auto h-[500px] max-h-screen mt-2">
            <ul className="">
              {todos.map((todo, inex) => (
                <Todo
                  key={inex}
                  todo={todo}
                  toggleComplet={updateState}
                  deleteTodo={deleteTodo}
                />
              ))}
            </ul>
          </main>
          <div className="w-full">
            <p className="text-center font-bold ">
              {`you have ${todos.length} todos`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
