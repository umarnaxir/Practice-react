import React from "react";
import CalculatorApp from "./components/CalculatorApp";
function Home(){
    return(
        <div>
            <CalculatorApp/>
        </div>
    );
}
export default Home;


// "use client";
// import React from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// function Header() {
//   const pathname = usePathname();

//   return (
//     <div className="bg-amber-500 text-2xl text-black py-5 flex justify-center items-center gap-4">
//       <Link href="/dashboard">
//         <button
//           className={`py-2 px-6 rounded-xl m-1 ${
//             pathname === "/dashboard"
//               ? "bg-black text-amber-300"
//               : "bg-amber-300 text-black hover:bg-amber-400"
//           }`}
//         >
//           Dashboard
//         </button>
//       </Link>

//       <Link href="/todo">
//         <button
//           className={`py-2 px-6 rounded-xl m-1 ${
//             pathname === "/todo"
//               ? "bg-black text-amber-300"
//               : "bg-amber-300 text-black hover:bg-amber-400"
//           }`}
//         >
//           To Do List
//         </button>
//       </Link>
//     </div>
//   );
// }

// export default Header;



// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// function Header() {
//   const [activeTab, setActiveTab] = useState();

//   return (
//     <div className="bg-amber-500 text-2xl text-black py-5 flex justify-center items-center gap-4">
//       <Link href="/dashboard">
//         <button
//           onClick={() => setActiveTab("dashboard")}
//           className={`py-2 px-6 rounded-xl m-1 transition-all duration-200 ${
//             activeTab === "dashboard"
//               ? "bg-black text-amber-300 scale-105"
//               : "bg-amber-300 text-black hover:bg-amber-400"
//           }`}
//         >
//           Dashboard
//         </button>
//       </Link>

//       <Link href="/todo">
//         <button
//           onClick={() => setActiveTab("todo")}
//           className={`py-2 px-6 rounded-xl m-1 transition-all duration-200 ${
//             activeTab === "todo"
//               ? "bg-black text-amber-300 scale-105"
//               : "bg-amber-300 text-black hover:bg-amber-400"
//           }`}
//         >
//           To Do List
//         </button>
//       </Link>
//     </div>
//   );
// }

// export default Header;
