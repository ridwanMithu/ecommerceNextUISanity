import {createContext, useState } from "react";



export const userContext=createContext();

export const UserProvider=({children})=>{
  const [loggedUser,setLoggedUser]=useState();
  console.log(loggedUser)


  return <userContext.Provider value={{setLoggedUser,loggedUser}}>
    {children}
  </userContext.Provider>
}