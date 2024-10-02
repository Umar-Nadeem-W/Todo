import { useState } from "react"
import TodoItem from "./TodoItem";
import Form from "./Form";
import Todolist from "./Todolist";
export default function Todo(){
    const [todos, setTodos] = useState([]);
  
    
     

return(
    <div>
        <Form todos={todos} setTodos={setTodos}/>
        <Todolist todos={todos} s/>
    </div>
)
}