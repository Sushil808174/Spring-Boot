import { useState } from 'react'
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import './TodoApp.css'
export default function TodoApp(){
    return(
        <div className="TodoApp">

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <LoginComponent/>}></Route>
                    <Route path='/login' element={ <LoginComponent/>}></Route>
                    <Route path='/welcome' element={ <WelcomeComponent/>}></Route>
                    <Route path='*' element={ <ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent(){
    const [username, setusername] = useState('Susheel')
    const [password, setpassword] = useState('00000000')
    const [successMsg,setsuccessMsg] = useState(false);
    const [errorMsg,seterrorMsg] = useState(false);
    const navigate = useNavigate();

    function ChangeUsernameHandler(event){
        setusername(event.target.value);
    }
    function ChangePasswordHandler(event){
        setpassword(event.target.value);
    }


    function handleSubmit(){
        if(username==='Susheel' && password==='123456'){
           setsuccessMsg(true);
           seterrorMsg(false);
           navigate('/welcome')
        }else{
            seterrorMsg(true);
            setsuccessMsg(false);
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
            {successMsg &&  <div className="successMessage">Authenticated successfully</div>}
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
function WelcomeComponent(){
    return(
        <div className="WelcomeComponent">
            <h1>Welcome Susheel</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}
function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1>We are working really hard.</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GFI.
            </div>
        </div>
    )
}