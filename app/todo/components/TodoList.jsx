"use client";
import { useState } from "react";
const TodoList = () => {
  const todos = [
    { id: 1, task: 'Learn React' },
    { id: 2, task: 'Having Lunch' },
    { id: 3, task: 'Office Work' },
  ];

  const [todosList, setTodosList] = useState(todos);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    const newTask = {
      id: Date.now(),
      task: input,
    };
    setTodosList([...todosList, newTask]);
    setInput('');
  }

  const deleteTask = (id) => {
    setTodosList(todosList.filter(todo => todo.id !== id));
  };

  return (
    <div className='bg-white text-black justify-center items-center min-h-screen pt-10 px-10'>
      <div className='bg-amber-200 w-max py-3 px-4 rounded-2xl'>
        <h1 className='text-4xl font-bold py-6'>To Do List</h1>
        <div className='mb-4 flex gap-2'>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className='border px-2 py-1 rounded'
            placeholder='Add task'
          />
          <button
            onClick={addTask}
            className='px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600'
          >
            Add Task
          </button>
        </div>
        <ul className='text-2xl'>
          {todosList.map((todo) => (
            <li key={todo.id} className='flex items-center justify-between mb-2'>
              <span>{todo.task}</span>
              <button
                onClick={() => deleteTask(todo.id)}
                className='ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm'
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoList;