import TodoItem from "./TodoItem"

export default function Todolist({todos}){

    return <div> 
        {todos.map((item) => (
                <TodoItem key={item} item ={item}/>
            ))}
    </div>
}