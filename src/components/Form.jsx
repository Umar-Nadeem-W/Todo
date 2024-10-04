import '../styles.css'
import { useState } from "react"; 
export default function ({todos,setTodos}){
    const [todo, setTodo] = useState({iname :"" , done: false});


    function handleSubmit(e){
        e.preventDefault();
         setTodos([...todos,todo]);    
         setTodo({iname:"" , done: false, id: 0})   
    }
    function addItem(e){
        let currindex = todos.length
        console.log(currindex)
        setTodo({iname: e.target.value, done: false, id: currindex})
    }



    return (
    <form  onSubmit={handleSubmit}>
    <div className='form-container' >
    <input className="input-container" type="text" 
    placeholder='Enter another item'
     onChange={(e) => addItem(e)}
     value={todo.iname}/>  
    <button className="button-style" type="submit">Add</button>
    </div>
    </form>
    );
}