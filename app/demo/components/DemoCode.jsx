'use client';
import { useState } from "react";
function Demo(){
    const [count, setCount] = useState(0)
    function handleClick(){
        setCount(count +  1)

    }

    return(
        <div>
            <h1>Let's Count: {count}</h1>
            <button onClick={handleClick} className="bg-amber-300 text-black rounded-xl">Add One</button>
        </div>
    )
}
export default Demo;