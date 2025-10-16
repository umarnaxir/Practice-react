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
  const query = searchQuery ? searchQuery.toLowerCase() : "";
  const filtered = query ? list.filter((t) => t.task.toLowerCase().includes(query)) : list;

  return (
    <ul className="space-y-3">
      {filtered.length === 0 ? (
        <EmptyState text={query && list.length > 0 ? "No matching items" : "No Items"} />
      ) : type === "pending" ? (
        filtered.map((todo, idx) => (
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
        filtered.map((todo) => {
          if (query) {
            const lower = todo.task.toLowerCase();
            const idx = lower.indexOf(query);
            const before = todo.task.slice(0, idx);
            const match = todo.task.slice(idx, idx + query.length);
            const after = todo.task.slice(idx + query.length);

            return (
              <li
                key={todo.id}
                className="flex flex-wrap items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]"
              >
                <span className="flex-1 text-lg">
                  <>
                    {before}
                    <mark className="bg-amber-300 px-0.5 rounded">{match}</mark>
                    {after}
                  </>
                </span>
                <button
                  onClick={() => onMoveBack(todo.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm transition-all duration-200 transform hover:scale-105"
                >
                  Move Back
                </button>
              </li>
            );
          }

          return (
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
          );
        })
      )}
    </ul>
  );
};
export default TaskList;
