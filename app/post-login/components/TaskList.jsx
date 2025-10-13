import React from "react";
import TaskItem from "./TaskItem";
import EmptyState from "./EmptyState";

const TaskList = ({
  type,
  list,
  editIndex,
  editValue,
  onEditChange,
  onEditSave,
  onEditCancel,
  onDelete,
  onTransfer,
  onEditClick,
  onMoveBack,
}) => {
  return (
    <ul className="space-y-3">
      {list.length === 0 ? (
        <EmptyState text="No Items" />
      ) : type === "pending" ? (
        list.map((todo, idx) => (
          <TaskItem
            key={todo.id}
            todo={todo}
            idx={idx}
            editIndex={editIndex}
            editValue={editValue}
            onEditChange={onEditChange}
            onEditSave={onEditSave}
            onEditCancel={onEditCancel}
            onDelete={onDelete}
            onTransfer={onTransfer}
            onEditClick={onEditClick}
          />
        ))
      ) : (
        list.map((todo) => (
          <li
            key={todo.id}
            className="flex flex-wrap items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]"
          >
            <span className="flex-1 text-lg">{todo.task}</span>
            <button
              onClick={() => onMoveBack(todo.id)}
              className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm transition-all duration-200 transform hover:scale-105"
            >
              Move Back
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;
