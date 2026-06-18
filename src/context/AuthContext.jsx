import { createContext, useState } from "react";
export const AuthContext=createContext();


export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem('token')||null)
    const[user,setUser]=useState(JSON.parse(localStorage.getItem('user'))||null)

    const login=(token,user)=>{
        localStorage.setItem("token",token)
        setToken(token)
        localStorage.setItem("user",JSON.stringify(user))
        setUser(user)
        }
    return(
<AuthContext.Provider value={{token,user,login}}>
{children}
</AuthContext.Provider>
)
}

