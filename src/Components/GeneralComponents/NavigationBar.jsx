import { IoLogOut } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,

} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { NavLink } from "react-router-dom";
import { userContext } from "../../Context APIs/UserContex.jsx";
import { useAuth0 } from "@auth0/auth0-react";
// import { useAuth0 } from "@auth0/auth0-react";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const {loginWithPopup,logout,user}=useAuth0();
  // console.log(user)

  const {setLoggedUser,loggedUser}=useContext(userContext);
  const {loginWithPopup,logout,user}=useAuth0();
  // setLoggedUser(user);
  
  const loginUserHandler=async()=>{
    await loginWithPopup();
    await setLoggedUser(user);
  }
  
  useEffect(() => {
    loginUserHandler();
  }, []);


  const menuItems = [
    {id:crypto.randomUUID(),
      name:"Home",
      url:"/home",
  },
  {id:crypto.randomUUID(),
    name:"All Products",
    url:"/shop",
},
{id:crypto.randomUUID(),
  name:"Blog",
  url:"/blog",
},

{id:crypto.randomUUID(),
  name:"Top Seller",
  url:"/topseller",
},
];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="gap-4 sm:flex" justify="center">
        {menuItems.map((customLinks, index) => (
          <NavbarItem key={index}>
            <NavLink className={({isActive}) =>
    isActive ? "font-semibold danger" : "text-neutral-700 font-thin"}
            to={customLinks.url}>
              {customLinks.name}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
      {/* If there is no logged in user then we will show these */}

      {loggedUser?"":<>
      <NavbarItem className="lg:flex">
          <Button color="danger" 
          onClick={loginUserHandler}
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </>}
        


        {/* after a user logs in then he will see this menu */}
        {loggedUser && (
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Avatar isBordered src={loggedUser.picture} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="profile"><div className="flex items-center gap-2" > <FaUserTie/> {loggedUser.nickname} </div></DropdownItem>
              <DropdownItem key="logout"> <div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="flex items-center gap-2" ><IoLogOut/>Logout</div>
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>
        </NavbarItem>)}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((customLinks, index) => (
          <NavbarMenuItem key={`${customLinks}-${index}`}>
          <NavLink className={({isActive}) =>
    isActive ? "font-semibold danger" : "text-neutral-700 font-thin"}
            to={customLinks.url}>
              {customLinks.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
