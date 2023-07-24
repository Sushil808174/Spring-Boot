import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth =() => useContext(AuthContext);
function AuthProvider({children}){

    const [isAuthenticated,setAuthenticated] = useState(false);
    const [username,setUsername] = useState(null);

    function login(username,password){
        if(username==='Susheel' && password==='dummy'){
           setAuthenticated(true);
           setUsername(username);
           return true;
        }else{
            setAuthenticated(false);
            setUsername(null)
            return false;
        }
    }

    function logOut(){
        setAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated,login,logOut,username}}>
                {children}
        </AuthContext.Provider>    
    )
}

export default AuthProvider;