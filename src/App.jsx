import React, { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const addTodo = (e) => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border-gray-200 border rounded-xl shadow-lg p-8 max-w-md w-full  bg-white">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          MY TODO LIST
        </h1>
        <div className="mb-4 flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a new task"
            className="flex-grow px-3 py-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            onClick={addTodo}
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Task
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-3 mb-2 rounded-lg border border-gray-200 shadow-sm"
            >
              <input
                type="checkbox"
                className="mr-2 h-5 w-5 text-blue-600"
                checked={todos.completed}
                onChange={() =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
              />
              <span
                className={`flex-grow ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800"
                }`}
              >
                {" "}
                {todo.text}{" "}
              </span>
              <img
                src="delete.svg"
                alt="delete"
                className="h-5 w-5 cursor-pointer"
                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
