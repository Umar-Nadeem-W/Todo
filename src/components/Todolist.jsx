import TodoItem from "./TodoItem"
import '../styles.css'

export default function Todolist({todos, setTodos}){

    return <div className="todoList-style"> 
        {todos.map((item) => (
                <TodoItem setTodos={setTodos} todos={todos} key={item} item ={item}/>
            ))}
    </div>
}