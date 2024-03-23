'use client'
import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: inputText,
          completed: false,
        },
      ]);
      setInputText("");
    }
  };

  const handleToggleCompletion = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="text-black">
      <h2 className="text-3xl">To-Do List</h2>
      <div className="mt-4">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="rounded-md px-3 py-2 min-w-96 mx-2 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter new task"
        />
        <button
          onClick={handleAddTodo}
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
            border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mt-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompletion(todo.id)}
              className="mr-2"
            />
            <span
              className={`flex-1 ${todo.completed && "line-through text-gray-500"}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="bg-red-500 text-white px-4 py-1 rounded-md transition-all
              hover:bg-red-600 hover:scale-105"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
