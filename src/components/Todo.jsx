import { useState } from "react"
import TodoItem from "./TodoItem";
import Form from "./Form";
import Todolist from "./Todolist";
import Counters from "./Counters";
import '../styles.css'
export default function Todo(){
    const [todos, setTodos] = useState([]);
  
    
     

return(
    <div className="todo-page">
        <Form todos={todos} setTodos={setTodos}/>
        <Todolist todos={todos} setTodos={setTodos}/>
        <Counters todos={todos}/>
    </div>
)
}