import '../styles.css'

export default function TodoItem({item, todos, setTodos}){
    function DeleteItem(item){    
            setTodos(todos.filter((theitem)=>{return (theitem !== item)})) // When using curly braces inside an arrow function, you need to have an explicti return statement
                          
    }
    function handleCross(tname){
        setTodos(todos.map((job) => job.id == tname ? {...job, done: !job.done }: job));
        console.log(todos)
    }
    const crossedClass = item.done ? "cross-style" : ""

    return(
    <div className="todoItem-style">
    
        <div className={crossedClass} onDoubleClick={()=>handleCross(item.id)}><h2>{item.iname}</h2></div>
        <button onClick={()=>DeleteItem(item)} className="Delete-button-style">
        X
        </button>
    </div>
    )
}