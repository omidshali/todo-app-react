import { RiDeleteBin6Line } from "react-icons/ri";
const Todo = (props) => {
  return (
    <li className="flex justify-between bg-gray-100 my-2 p-2 shadow">
      <div className="flex gap-2">
        <input className="" type="checkbox" />
        <p className="">{props.todo.text}</p>
      </div>
      <button className="text-gray-800">
        <RiDeleteBin6Line />
      </button>
    </li>
  );
};

export default Todo;
