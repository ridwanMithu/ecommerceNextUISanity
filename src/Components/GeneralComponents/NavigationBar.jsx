import { IoLogOut } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { useState } from "react";
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

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <NavbarItem className="lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="profile"><div className="flex items-center gap-2" > <FaUserTie/> Profile</div></DropdownItem>
              <DropdownItem key="logout"> <div className="flex items-center gap-2" ><IoLogOut/>Logout</div></DropdownItem>

            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
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
