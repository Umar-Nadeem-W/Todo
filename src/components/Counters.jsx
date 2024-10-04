export default function Counters({todos}){

    return(<div className="counter-row"> 
        <div className="counter-container-1">
        <h3>Goals left:</h3>  <h3>{
                todos.filter((item) => item.done != true).length
            }
            </h3>
        </div>
        <div className="counter-container-2"> 
            <h3>Goals done:</h3>  <h3>{
                todos.filter((item) => item.done == true).length
            }
            </h3>
        </div>
        
    </div>)
}