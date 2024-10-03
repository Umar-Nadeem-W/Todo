import '../styles.css'

export default function TodoItem({item, todos, setTodos}){
    function DeleteItem(item){
       
            setTodos(todos.filter((theitem)=>{return (theitem !== item)})) // When using curly braces inside an arrow function, you need to have an explicti return statement
      
        
        
    }

    return(
    <div className="todoItem-style">
        {item}
        <button onClick={()=>DeleteItem(item)} className="Delete-button-style">
        X
        </button>
    </div>
    )
}