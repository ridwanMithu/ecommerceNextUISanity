import {createContext, useState } from "react";



export const userContext=createContext();

export const UserProvider=({children})=>{
  const [loggedUser, setLoggedUser]=useState({});
  console.log("from context", loggedUser)
  return <userContext.Provider value={{loggedUser,setLoggedUser}}>
    {children}
  </userContext.Provider>
}