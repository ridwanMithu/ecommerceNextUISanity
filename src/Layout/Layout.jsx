import { Outlet } from "react-router-dom";
import NavigationBar from "../Components/GeneralComponents/NavigationBar";
import Footer from "../Components/GeneralComponents/Footer";


export default function Layout() {
  return (
    <>
    <header>
      <NavigationBar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <div>
      <Footer />
    </div>

    </>


  )
}
