import { IoLogOut } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { useContext, useState } from "react";
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
import { useAuth0 } from "@auth0/auth0-react";
import { userContext } from "../../Context APIs/UserContex.jsx";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { setLoggedUser} = useContext(userContext);
  const { loginWithPopup, user, logout } = useAuth0();
  setLoggedUser(user);
  

  const menuItems = [
    { id: crypto.randomUUID(), name: "Home", url: "/home" },
    { id: crypto.randomUUID(), name: "All Products", url: "/shop" },
    { id: crypto.randomUUID(), name: "Blog", url: "/blog" },

    { id: crypto.randomUUID(), name: "Top Seller", url: "/topseller" },
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

      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        {menuItems.map((customLinks, index) => (
          <NavbarItem key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold danger" : "text-neutral-700 font-thin"
              }
              to={customLinks.url}
            >
              {customLinks.name}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">

      {user?
      <>
      <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Avatar isBordered src={user.picture} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="profile">
                <div className="flex items-center gap-2">
                  {" "}
                  <FaUserTie />{user.nickname}
                </div>
              </DropdownItem>
              <DropdownItem key="logout">
                {" "}
                <div
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="flex items-center gap-2"
                >
                  <IoLogOut />
                  Logout
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </>:
      <>
      <NavbarItem className="lg:flex">
          <Button onClick={() => loginWithPopup()} color="danger">
            Login
          </Button>
        </NavbarItem>
      </>
      }




      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((customLinks, index) => (
          <NavbarMenuItem key={`${customLinks}-${index}`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold danger" : "text-neutral-700 font-thin"
              }
              to={customLinks.url}
            >
              {customLinks.name}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
