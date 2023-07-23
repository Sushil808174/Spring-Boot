import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth =() => useContext(AuthContext);
function AuthProvider({children}){

    const [isAuthenticated,setAuthenticated] = useState(false);

    function login(username,password){
        if(username==='user' && password==='dummy'){
           setAuthenticated(true);
           return true;
        }else{
            setAuthenticated(false);
            return false;
        }
    }

    function logOut(){
        setAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated,login,logOut}}>
                {children}
        </AuthContext.Provider>    
    )
}

export default AuthProvider;