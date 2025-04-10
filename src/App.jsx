import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border-gray-200 border rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-white mb-6">
          My To Do List
        </h1>
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Add a new task"
            className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            onClick={addTodo}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
