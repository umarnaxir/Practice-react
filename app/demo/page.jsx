import React from "react";
import DemoCode from "./components/DemoCode"
function App(){
    return(
        <DemoCode/>
    );
}
export default App;

//import React from "react";
// import Button from "./Button";

// const TaskItem = ({
//   todo,
//   idx,
//   editIndex,
//   editValue,
//   onEditChange,
//   onEditSave,
//   onEditCancel,
//   onDelete,
//   onTransfer,
//   onEditClick,
//   searchQuery,
// }) => {
//   const isEditing = editIndex === idx;

//   return (
//     <li className="flex flex-wrap items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]">
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={editValue}
//             onChange={(e) => onEditChange(e.target.value)}
//             className="flex-1 min-w-[150px] border-2 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-500 mr-3 bg-white"
//           />
//           <div className="flex gap-2 mt-2 sm:mt-0">
//             <Button text="Save" bgColor="bg-indigo-600" size="sm" onClick={() => onEditSave(todo.id)} />
//             <Button text="Cancel" bgColor="bg-gray-400" size="sm" onClick={onEditCancel} />
//           </div>
//         </>
//       ) : (
//         <>
//           <span className="flex-1 text-lg">
//             {searchQuery ? (
//               todo.task.split(new RegExp(`(${escapeRegExp(searchQuery)})`, "gi")).map((part, i) =>
//                 part.toLowerCase() === searchQuery.toLowerCase() ? (
//                   <mark key={i} className="bg-amber-200 px-0.5 rounded">
//                     {part}
//                   </mark>
//                 ) : (
//                   <span key={i}>{part}</span>
//                 )
//               )
//             ) : (
//               todo.task
//             )}
//           </span>
//           <div className="flex gap-2">
//             <Button text="Delete" bgColor="bg-red-500" size="sm" onClick={() => onDelete(todo.id)} />
//             <Button text="Transfer" bgColor="bg-green-500" size="sm" onClick={() => onTransfer(todo.id)} />
//             <Button text="Edit" bgColor="bg-indigo-600" size="sm" onClick={() => onEditClick(todo.id, idx)} />
//           </div>
//         </>
//       )}
//     </li>
//   );
// };

// export default TaskItem;

// function escapeRegExp(string) {
//   return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// }
