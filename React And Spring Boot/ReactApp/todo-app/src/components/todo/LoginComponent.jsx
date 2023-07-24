import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
function LoginComponent(){
    const [username, setusername] = useState('Susheel')
    const [password, setpassword] = useState('00000000')
    const [successMsg,setsuccessMsg] = useState(false);
    const [errorMsg,seterrorMsg] = useState(false);
    const navigate = useNavigate();

    const authContext = useAuth();

    function ChangeUsernameHandler(event){
        setusername(event.target.value);
    }
    function ChangePasswordHandler(event){
        setpassword(event.target.value);
    }


    function handleSubmit(){
        if(authContext.login(username,password)){
           navigate(`/welcome/${username}`)
        }else{
            seterrorMsg(true);
        }
    }

    // function SuccessMsgComponent(){
    //     if(successMsg){
    //         return  <div className="successMessage">Authenticated successfully</div>
    //     }
    //     return null;
    // }
    // function ErrorMsgComponent(){
    //     if(errorMsg){
    //         return  <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
    //     }
    //     return null;
    // }

    return(
        <div className="Login">
            <h1>Time to Login!</h1>
            {errorMsg && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label htmlFor="">User Name</label>
                    <input type="text" name="username" value={username} onChange={ChangeUsernameHandler}/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" value={password} onChange={ChangePasswordHandler}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;