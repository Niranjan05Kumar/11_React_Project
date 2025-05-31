import React from "react";
import { useState, useEffect } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveTolS = (param) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAdd = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { todo, isCompleted: false }]);
      setTodo("");
      saveTolS();
    }
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
    saveTolS();
  };
  const handleEdit = (e) => {
    const taskToEdit = e.target.parentElement.parentElement
      .querySelector(".task")
      .textContent.trim();
    setTodo(taskToEdit);
    setTodos(todos.filter((item) => item.todo !== taskToEdit));
    saveTolS();
  };
  const handleDelete = (e) => {
    setTodos(
      todos.filter(
        (item) =>
          item.todo !==
          e.target.parentElement.parentElement
            .querySelector(".task")
            .textContent.trim()
      )
    );
    saveTolS();
  };
  const handleCheckbox = (event) => {
    const newTodos = todos.map((item) => {
      if (item.todo === event.target.nextElementSibling.textContent.trim()) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodos(newTodos);
    saveTolS();
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="container backdrop-blur-sm bg-white/90 mx-auto max-w-[600px] w-full min-h-[70vh] flex flex-col items-center justify-start p-4 sm:p-8 rounded-lg shadow-xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 sm:mb-6">
          Todo List
        </h1>
        <div className="input-tab w-full flex flex-col sm:flex-row gap-2 mb-4 sm:mb-6">
          <input
            type="text"
            onChange={handleChange}
            value={todo}
            className="flex-1 px-4 py-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />
          <button
            onClick={handleAdd}
            className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Add
          </button>
        </div>
        <div className="todos w-full space-y-2 sm:space-y-3">
          {todos.map((item) => {
            return (
              <div className="todo bg-[#b7c2e286] p-2 sm:p-3 rounded-lg shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between hover:shadow-md transition-all duration-200 gap-2">
                <div className="task flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={handleCheckbox}
                    className="w-4 h-4 accent-green-600"
                  />
                  <h3
                    className={`task text-gray-700 font-bold text-md sm:text-base ${
                      item.isCompleted ? "line-through" : ""
                    }`}
                  >
                    {item.todo}
                  </h3>
                </div>
                <div className="buttons flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleEdit}
                    className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-md hover:from-green-500 hover:to-green-600 transition-all duration-500 text-sm"
                  >
                    <MdEdit size={20} />
                  </button>
                  <button
                    onClick={handleDelete}
                    className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-md hover:from-red-500 hover:to-red-600 transition-all duration-500 text-sm"
                  >
                    <MdDelete size={20} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
