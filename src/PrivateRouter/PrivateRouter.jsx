import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({children}) {
  const {user}=useAuth0();
  console.log(user);
  return user?children:
  // <div className="my-10 text-3xl font-bold text-center text-red-600">"You must login first!!"</div>; //this is one way of implementing
  <Navigate to={"/home"}/> //if you user failed to see this page as he is not logged in then use the navigate button to send him to any page of your choosing
  
}
