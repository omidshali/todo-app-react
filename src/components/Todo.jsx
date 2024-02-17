const Todo = (props) => {
  return (
    <li className="flex justify-between bg-gray-100 my-2 p-2 shadow">
      <div className="flex gap-2">
        <input className="" type="checkbox" />
        <p className="">{props.todo}</p>
      </div>
      <button>delete</button>
    </li>
  );
};

export default Todo;
