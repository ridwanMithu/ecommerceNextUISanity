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

      <NavbarContent className="sm:flex gap-4" justify="center">
        {menuItems.map((customLinks, index) => (
          <NavbarItem key={index}>
            <NavLink to={customLinks.url}>
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
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
