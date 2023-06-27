import React from "react";
import { NavbarElement, Navigation, NavigationLink, IconBox } from "./styled";
import LogoIcon from "../../Icons/LogoIcon";
import ProfileIcon from "../../Icons/ProfileIcon";
import SearchIcon from "../../Icons/SearchIcon";
import HeartIcon from "../../Icons/HeartIcon";
import CartIcon from "../../Icons/CartIcon";

const links = [
  {
    link: "/home",
    name: "Home",
  },

  {
    link: "/shop",
    name: "Shop",
  },

  {
    link: "/about",
    name: "About",
  },

  {
    link: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  return (
    <NavbarElement>
      <LogoIcon />
      <Navigation>
        {links.map(({ link, name }, index) => {
          return (
            <NavigationLink to={link} key={index}>
              {name}
            </NavigationLink>
          );
        })}
      </Navigation>

      <IconBox>
        <ProfileIcon />
        <SearchIcon />
        <HeartIcon />
        <CartIcon />
      </IconBox>
    </NavbarElement>
  );
};

export default Navbar;
