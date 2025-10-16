import React from "react";
import Button from "./Button";

const TaskItem = ({
  todo,
  idx,
  editIndex,
  editValue,
  onEditChange,
  onEditSave,
  onEditCancel,
  onDelete,
  onTransfer,
  onEditClick,
  searchQuery,
}) => {
  const isEditing = editIndex === idx;

  return (
    <li className="flex flex-wrap items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => onEditChange(e.target.value)}
            className="flex-1 min-w-[150px] border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500 mr-3 bg-white"
          />
          <div className="flex gap-2 mt-2 sm:mt-0">
            <Button
              text="S"
              bgColor="bg-indigo-600"
              size="sm"
              onClick={() => onEditSave(todo.id)}
            />
            <Button
              text="C"
              bgColor="bg-gray-400"
              size="sm"
              onClick={onEditCancel}
            />
          </div>
        </>
      ) : (
        <>
          <span className="flex-1 text-lg">
            {searchQuery &&
            todo.task.toLowerCase().includes(searchQuery.trim().toLowerCase())
              ? todo.task
              : todo.task}
          </span>
          <div className="flex gap-2">
            <Button
              text="D"
              bgColor="bg-red-500"
              size="sm"
              onClick={() => onDelete(todo.id)}
            />
            <Button
              text="T"
              bgColor="bg-green-500"
              size="sm"
              onClick={() => onTransfer(todo.id)}
            />
            <Button
              text="E"
              bgColor="bg-indigo-600"
              size="sm"
              onClick={() => onEditClick(todo.id, idx)}
            />
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
