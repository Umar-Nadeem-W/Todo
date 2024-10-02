
import { useState } from "react";
export default function ({todos,setTodos}){
    const [todo, setTodo] = useState("");


    function handleSubmit(e){
        e.preventDefault();
         setTodos([...todos,todo]);    
         setTodo("")   
    }


    
    return (
    <form onSubmit={handleSubmit}>
        <div>
    <input type="text" 
     onChange={(e) => setTodo(e.target.value)}
     value={todo}/>  
    <button type="submit">Add</button>
    </div>
    </form>
    );
}