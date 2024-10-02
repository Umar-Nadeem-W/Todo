import '../styles.css'
import { useState } from "react";
export default function ({todos,setTodos}){
    const [todo, setTodo] = useState("");


    function handleSubmit(e){
        e.preventDefault();
         setTodos([...todos,todo]);    
         setTodo("")   
    }


    
    return (
    <form  onSubmit={handleSubmit}>
    <div className='form-container' >
    <input className="input-container" type="text" 
    placeholder='Enter another item'
     onChange={(e) => setTodo(e.target.value)}
     value={todo}/>  
    <button className="button-style" type="submit">Add</button>
    </div>
    </form>
    );
}