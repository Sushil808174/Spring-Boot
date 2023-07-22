import { useState } from 'react'
import {BrowserRouter,Routes,Route,useNavigate,useParams,Link} from 'react-router-dom'
import './TodoApp.css'
export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={ <LoginComponent/>}  />
                    <Route path='/login' element={ <LoginComponent/>} />
                    <Route path='/welcome/:username' element={ <WelcomeComponent/>} />
                    <Route path='/list-todos' element={ <ListTodosComponent/>} />
                    <Route path='/logout' element={ <LogOutComponent/>} />
                    <Route path='*' element={ <ErrorComponent/>} />
                </Routes>
                    <FooterComponent />
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
           navigate('/welcome/Susheel')
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
    const params = useParams();
    return(
        <div className="WelcomeComponent">
            <h1>Welcome {params.username}</h1>
            <div>
                Manage your todos - <Link to="/list-todos">Go here.</Link>
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
function ListTodosComponent(){

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+10,today.getMonth(),today.getDay());

    const todos = [
        { id: 1,description:"Learn AWS",done:false,targetDate:targetDate},
        { id: 2,description:"Learn devOps",done:false,targetDate:targetDate},
        { id: 3,description:"Learn Spring Boot",done:false,targetDate:targetDate},
        { id: 4,description:"Learn Full Stack developer",done:false,targetDate:targetDate}
    ]
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
                                        <td>{todo.targetDate.toDateString()}</td>
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

function HeaderComponent(){
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand ms-2 fs-2 fw-bold text-black" to="/">Todo App</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/Susheel">Home</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/list-todos">Todos</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    )
}
function FooterComponent(){
    return(
        <footer className="FooterComponent">
            <div class="container">Footer</div>
        </footer>
    )
}
function LogOutComponent(){
    return(
        <header className="LogOutComponent">
            <h1>You are Logged out.</h1>
            <div>Thanks for using our App. Come back soon.</div>
        </header>
    )
}