"use client";
import { useState } from "react";
import Header from "../../components/Header";
import SectionBox from "../../components/SectionBox";
import InputField from "../../components/InputField";
import TaskList from "../../components/TaskList";
import Button from "../../components/Button";
import Toast from "../../components/Toast";

const TodoList = () => {
  const [todosList, setTodosList] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Having Lunch" },
    { id: 3, task: "Office Work" },
  ]);
  const [transferList, setTransferList] = useState([]);
  const [inputPending, setInputPending] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [toast, setToast] = useState({ message: "", visible: false });
  const [searchQuery, setSearchQuery] = useState("");

  const showToast = (message) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 3000);
  };

  const addTask = () => {
    if (!inputPending.trim()) return;
    const newTask = { id: Date.now(), task: inputPending };
    setTodosList([...todosList, newTask]);
    setInputPending("");
    showToast("Task added successfully!");
  };

  const deleteTask = (id) => {
    setTodosList(todosList.filter((todo) => todo.id !== id));
    showToast("Task deleted!");
  };

  const transferTask = (id) => {
    const task = todosList.find((t) => t.id === id);
    if (task) {
      setTodosList(todosList.filter((t) => t.id !== id));
      setTransferList([...transferList, task]);
      showToast("Task transferred!");
    }
  };

  const moveBackTask = (id) => {
    const task = transferList.find((t) => t.id === id);
    if (task) {
      setTransferList(transferList.filter((t) => t.id !== id));
      setTodosList([...todosList, task]);
      showToast("Moved back!");
    }
  };

  const moveAll = () => {
    if (!todosList.length) return;
    setTransferList([...transferList, ...todosList]);
    setTodosList([]);
    showToast("All moved!");
  };

  const moveAllBack = () => {
    if (!transferList.length) return;
    setTodosList([...todosList, ...transferList]);
    setTransferList([]);
    showToast("All moved back!");
  };

  const handleEdit = (id, idx) => {
    setEditIndex(idx);
    setEditValue(todosList[idx].task);
  };

  const handleEditSave = (id) => {
    if (!editValue.trim()) return;
    const updated = todosList.map((t, i) =>
      i === editIndex ? { ...t, task: editValue } : t
    );
    setTodosList(updated);
    setEditIndex(null);
    setEditValue("");
    showToast("Task edited!");
  };

  const handleEditCancel = () => {
    setEditIndex(null);
    setEditValue("");
    showToast("Edit cancelled!");
  };

  return (
    <div className="flex flex-col bg-black text-gray-800 justify-center items-center py-1 px-6 pb-60 min-h-screen md:px-12 gap-6">
  <Header title="TO DO LIST" searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex flex-col md:flex-row justify-center items-start gap-6 w-full">
        {/* Pending Tasks */}
        <div className="w-full md:w-[400px]">
          <SectionBox title="Pending Task">
            <div className="mb-6 flex gap-3">
              <InputField value={inputPending} onChange={setInputPending} placeholder="Add a task..." />
              <Button text="Add Task" onClick={addTask} />
            </div>
            <TaskList
              type="pending"
              list={todosList}
              searchQuery={searchQuery}
              editIndex={editIndex}
              editValue={editValue}
              onEditChange={setEditValue}
              onEditSave={handleEditSave}
              onEditCancel={handleEditCancel}
              onDelete={deleteTask}
              onTransfer={transferTask}
              onEditClick={handleEdit}
            />
          </SectionBox>
          <Button text="MOVE ALL" bgColor="bg-green-500" size="lg" full onClick={moveAll} className="mt-4" />
        </div>

        {/* Completed Tasks */}
        <div className="w-full md:w-[400px]">
          <SectionBox title="Completed Task">
            <TaskList type="completed" list={transferList} onMoveBack={moveBackTask} searchQuery={searchQuery} />
          </SectionBox>
          <Button text="MOVE ALL BACK" bgColor="bg-red-500" size="lg" full onClick={moveAllBack} className="mt-4" />
        </div>
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
};

export default TodoList;
