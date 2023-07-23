
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import LogOutComponent from './LogOutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import './TodoApp.css'

function AuthenticatedRouter({children}){
    const authContext = useAuth();

    if(authContext.isAuthenticated){
        return children;
    }else{
        return <Navigate to="/" />
    }
}
export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={ <LoginComponent/>}  />
                        <Route path='/login' element={ <LoginComponent/>} />

                        <Route path='/welcome/:username' element={ 
                            <AuthenticatedRouter>
                                <WelcomeComponent/>
                            </AuthenticatedRouter>
                        } />

                        <Route path='/list-todos' element={ 
                            <AuthenticatedRouter>
                                <ListTodosComponent/>
                            </AuthenticatedRouter>
                        } />

                        <Route path='/logout' element={ 
                            <AuthenticatedRouter>
                                <LogOutComponent/>
                            </AuthenticatedRouter>
                        } />

                        <Route path='*' element={ <ErrorComponent/>} />
                    </Routes>
                        <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}


