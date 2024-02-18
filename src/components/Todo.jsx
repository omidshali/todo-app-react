import { RiDeleteBin6Line } from "react-icons/ri";
const Todo = ({ todo, toggleComplet, deleteTodo }) => {
  return (
    <li
      className={
        todo.isCompleted
          ? "flex justify-between bg-gray-400 first:my-0 last:mb-0 my-2 p-2 shadow"
          : "flex justify-between bg-gray-100 first:my-0 last:mb-0 my-2 p-2 shadow"
      }
    >
      <div className="flex gap-2">
        <input
          onChange={() => toggleComplet(todo)}
          className="cursor-pointer"
          type="checkbox"
          checked={todo.isCompleted ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplet(todo)}
          className={
            todo.isCompleted ? "line-through cursor-pointer" : "cursor-pointer"
          }
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className="text-gray-800">
        <RiDeleteBin6Line />
      </button>
    </li>
  );
};

export default Todo;
