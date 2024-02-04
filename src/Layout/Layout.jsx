import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/GeneralComponents/NavigationBar";


export default function Layout() {
  return (
    <>
    <header>
      <NavigationBar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>Footer Menu</footer>
    </>


  )
}
