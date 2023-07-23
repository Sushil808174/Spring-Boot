import { useState } from "react";
import { retrieveAllTodoForUsername } from "./api/TodoApiService";
function ListTodosComponent(){

    // const today = new Date();
    // const targetDate = new Date(today.getFullYear()+10,today.getMonth(),today.getDay());

    const [todos,setTodos] = useState([]);
    retrieveAllTodoForUsername('Susheel')
    .then(response => {
        console.log(response.data);
        setTodos(response.data)
    }).catch(error => console.log(error))

    // const todos = [
    //     { id: 1,description:"Learn AWS",done:false,targetDate:targetDate},
    //     { id: 2,description:"Learn devOps",done:false,targetDate:targetDate},
    //     { id: 3,description:"Learn Spring Boot",done:false,targetDate:targetDate},
    //     { id: 4,description:"Learn Full Stack developer",done:false,targetDate:targetDate}
    // ]
    return(
        <div className="container">
            <h1>Things You want to do.</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Is Done</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent;