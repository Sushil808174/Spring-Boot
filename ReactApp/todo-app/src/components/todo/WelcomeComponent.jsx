import { useParams,Link } from "react-router-dom";
import { useState } from "react";
import {retrieveHelloWorldHandlerBean,retrieveHelloWorldHandlerPathVariable} from './api/HelloWorldApiService'
function WelcomeComponent(){
    const params = useParams();
    const [message,setMessage] = useState(null);

    function callHelloWorld(){

        // retrieveHelloWorldHandlerBean()
        // .then(respnse => successfulResponse(respnse))
        // .catch(error => errorResponse(error))
        // .finally(() => console.log('cleanup'))

        retrieveHelloWorldHandlerPathVariable('Susheel')
        .then(respnse => successfulResponse(respnse))
        .catch(error => errorResponse(error))
        .finally(() => console.log('cleanup'))
    }

    function successfulResponse(response){
        console.log(response.data);
        setMessage(response.data.message);
    }
    function errorResponse(error){
        console.log(error);
    }

    return(
        <div className="WelcomeComponent">
            <h1>Welcome {params.username}</h1>
            <div>
                Manage your todos - <Link to="/list-todos">Go here.</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorld}>
                    Call Hello World</button>
            </div>
            <div className="text-primary">{message}</div>
        </div>
    )
}

export default WelcomeComponent;