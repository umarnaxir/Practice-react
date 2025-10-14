import React from "react";
import TaskItem from "./TaskItem";
import EmptyState from "./EmptyState";

const TaskList = ({
  type,
  list,
  searchQuery,
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
            searchQuery={searchQuery}
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
            <span className="flex-1 text-lg">
              {searchQuery ? (
                todo.task.split(new RegExp(`(${escapeRegExp(searchQuery)})`, "gi")).map((part, i) =>
                  part.toLowerCase() === searchQuery.toLowerCase() ? (
                    <mark key={i} className="bg-amber-200 px-0.5 rounded">
                      {part}
                    </mark>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )
              ) : (
                todo.task
              )}
            </span>
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

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default TaskList;
