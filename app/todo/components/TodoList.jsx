"use client";
import { useEffect, useState } from "react";
const TodoList = () => {
  const todos = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Having Lunch" },
    { id: 3, task: "Office Work" },
  ];

  const [todosList, setTodosList] = useState(todos);
  const [transferList, setTransferList] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      task: input,
    };
    setTodosList([...todosList, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTodosList(todosList.filter((todo) => todo.id !== id));
  };

  const transferTask = (id) => {
    const taskToTransfer = todosList.find((todo) => todo.id === id);
    if (taskToTransfer) {
      setTodosList(todosList.filter((todo) => todo.id !== id));
      setTransferList([...transferList, taskToTransfer]);
    }
  };

  const moveBackTask = (id) => {
    const taskToMoveBack = transferList.find((todo) => todo.id === id);
    if (taskToMoveBack) {
      setTransferList(transferList.filter((todo) => todo.id !== id));
      setTodosList([...todosList, taskToMoveBack]);
    }
  };
    const transferAll = () => {
    setTransferList([...transferList, ...todosList]);
    setTodosList([]);
  };

  const transferAllBack = () => {
    setTodosList([...todosList, ...transferList]);
    setTransferList([]);
  };


const handleEdit = (id, index) => {
  setEditIndex(index);
  setEditValue(todosList[index].task);
};

const handleEditSave = (id) => {
  const updatedTodos = todosList.map((todo, idx) =>
    idx === editIndex ? { ...todo, task: editValue } : todo
  );
  setTodosList(updatedTodos);
  setEditIndex(null);
  setEditValue("");
};

const handleEditCancel = () => {
  setEditIndex(null);
  setEditValue("");
};

//  useEffect(() => {
//   console.log(todosList);
// }, []);

  return (
    // TodoList
    <div className="flex flex-row bg-white text-black justify-center items-start min-h-screen pt-10 px-10 gap-8">
      <div className="bg-amber-200 w-max py-3 px-4 rounded-2xl">
        <h1 className="text-4xl font-bold py-6">To Do List</h1>
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border px-2 py-1 rounded"
            placeholder="Add task"
          />
          <button
            onClick={addTask}
            className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Task
          </button>
        </div>
        <ul className="text-2xl">
          {todosList.map((todo, idx) => (
            <li
              key={todo.id}
              className="flex items-center justify-between mb-2"
            >
              {editIndex === idx ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="border px-2 py-1 rounded mr-2"
                  />
                  <button
                    onClick={() => handleEditSave(todo.id)}
                    className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleEditCancel}
                    className="px-2 py-1 bg-red-400 text-white rounded hover:bg-red-500 text-sm"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span>{todo.task}</span>
                  <button
                    onClick={() => deleteTask(todo.id)}
                    className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => transferTask(todo.id)}
                    className="ml-4 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                  >
                    Transfer
                  </button>
                  <button
                    onClick={() => handleEdit(todo.id, idx)}
                    className="ml-4 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                  >
                    Edit
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Transfer all Data */}
      <button
        onClick={() => transferAll(TodoList)}
        className="ml-4 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
      >
        Transfer all
      </button>

    <button
        onClick={() => transferAllBack(TodoList)}
        className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
      >
        Transfer all Back
      </button>

      {/* Transfer List */}
      <div className="bg-amber-500 border-2 min-h-[400px] w-max py-3 px-4 rounded-2xl flex flex-col">
        <h1 className="text-4xl font-bold py-6">Transfer List</h1>
        <ul className="text-2xl">
          {transferList.length === 0 && (
            <li className="text-lg text-gray-700">No Items</li>
          )}
          {transferList.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between mb-2"
            >
              <span>{todo.task}</span>
              <button
                onClick={() => moveBackTask(todo.id)}
                className="ml-4 px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
              >
                Move Back
              </button>
            </li>
          ))}
        </ul>
      </div>
        {/* <div>
          <h1 className="w-xl h-60 border-2">Hello</h1>
        </div> */}
    </div>
  );
};
export default TodoList;
