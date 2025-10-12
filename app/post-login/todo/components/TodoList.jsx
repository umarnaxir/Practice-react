"use client";
import { useState } from "react";
import Toast from "../../components/Toast";

const TodoList = () => {
  const todos = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Having Lunch" },
    { id: 3, task: "Office Work" },
  ];

  const [todosList, setTodosList] = useState(todos);
  const [transferList, setTransferList] = useState([]);
  const [inputPending, setInputPending] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [toast, setToast] = useState({ message: "", visible: false });

  const showToast = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 3000);
  };

  const addTaskToPending = () => {
    if (inputPending.trim() === "") return;
    const newTask = {
      id: Date.now(),
      task: inputPending,
    };
    setTodosList([...todosList, newTask]);
    setInputPending("");
    showToast("Task added to Pending Task successfully!");
  };

  const deleteTask = (id) => {
    setTodosList(todosList.filter((todo) => todo.id !== id));
    showToast("Task deleted successfully!");
  };

  const transferTask = (id) => {
    const taskToTransfer = todosList.find((todo) => todo.id === id);
    if (taskToTransfer) {
      setTodosList(todosList.filter((todo) => todo.id !== id));
      setTransferList([...transferList, taskToTransfer]);
      showToast("Task transferred successfully!");
    }
  };

  const moveBackTask = (id) => {
    const taskToMoveBack = transferList.find((todo) => todo.id === id);
    if (taskToMoveBack) {
      setTransferList(transferList.filter((todo) => todo.id !== id));
      setTodosList([...todosList, taskToMoveBack]);
      showToast("Task moved back successfully!");
    }
  };

  const moveAll = () => {
    if (todosList.length === 0) return;
    setTransferList([...transferList, ...todosList]);
    setTodosList([]);
    showToast("All tasks transferred successfully!");
  };

  const moveAllBack = () => {
    if (transferList.length === 0) return;
    setTodosList([...todosList, ...transferList]);
    setTransferList([]);
    showToast("All tasks moved back successfully!");
  };

  const handleEdit = (id, index) => {
    setEditIndex(index);
    setEditValue(todosList[index].task);
  };

  const handleEditSave = (id) => {
    if (editValue.trim() === "") return;
    const updatedTodos = todosList.map((todo, idx) =>
      idx === editIndex ? { ...todo, task: editValue } : todo
    );
    setTodosList(updatedTodos);
    setEditIndex(null);
    setEditValue("");
    showToast("Task edited successfully!");
  };

  const handleEditCancel = () => {
    setEditIndex(null);
    setEditValue("");
    showToast("Edit cancelled!");
  };

  return (
    <div className="flex flex-col bg-gray-100 text-gray-800 justify-center items-center py-12 pb-36 px-6 md:px-12 gap-6">
      <h1 className="text-4xl font-bold text-gray-800 text-center uppercase border-b-2 border-black pb-2">TO DO LIST</h1>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 w-full">
        <div className="w-full md:w-[400px]">
          <div className="bg-amber-400 w-full min-h-[400px] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase border-b-2 border-black pb-2">PENDING TASK</h1>
            <div className="mb-6 flex gap-3">
              <input
                type="text"
                value={inputPending}
                onChange={(e) => setInputPending(e.target.value)}
                className="flex-1 border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-200 bg-white"
                placeholder="Add a task..."
              />
              <button
                onClick={addTaskToPending}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105"
              >
                Add Task
              </button>
            </div>
            <ul className="space-y-3">
              {todosList.map((todo, idx) => (
                <li
                  key={todo.id}
                  className="flex flex-wrap items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {editIndex === idx ? (
                    <>
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="flex-1 min-w-[150px] border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500 mr-3 bg-white"
                      />
                      <div className="flex gap-2 mt-2 sm:mt-0">
                        <button
                          onClick={() => handleEditSave(todo.id)}
                          className="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm transition-all duration-200 transform hover:scale-105"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleEditCancel}
                          className="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 text-sm transition-all duration-200 transform hover:scale-105"
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="flex-1 text-lg">{todo.task}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => deleteTask(todo.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm transition-all duration-200 transform hover:scale-105"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => transferTask(todo.id)}
                          className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm transition-all duration-200 transform hover:scale-105"
                        >
                          Transfer
                        </button>
                        <button
                          onClick={() => handleEdit(todo.id, idx)}
                          className="px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm transition-all duration-200 transform hover:scale-105"
                        >
                          Edit
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={moveAll}
            className="w-full mt-4 px-4 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xl font-bold transition-all duration-200 transform hover:scale-105"
          >
            MOVE ALL
          </button>
        </div>

        <div className="w-full md:w-[400px]">
          <div className="bg-amber-400 w-full min-h-[400px] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center uppercase border-b-2 border-black pb-2">COMPLETED TASK</h1>
            <ul className="space-y-3">
              {transferList.length === 0 && (
                <li className="text-lg text-gray-500 text-center">No Items</li>
              )}
              {transferList.map((todo) => (
                <li
                  key={todo.id}
                  className="flex flex-wrap items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  <span className="flex-1 text-lg">{todo.task}</span>
                  <button
                    onClick={() => moveBackTask(todo.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm transition-all duration-200 transform hover:scale-105"
                  >
                    Move Back
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={moveAllBack}
            className="w-full mt-4 px-4 py-4 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xl font-bold transition-all duration-200 transform hover:scale-105"
          >
            MOVE ALL BACK
          </button>
        </div>
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
};

export default TodoList;