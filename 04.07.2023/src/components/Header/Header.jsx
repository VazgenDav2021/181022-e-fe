import React from "react";
import navbarLinks from "./navbar.json";

const Header = () => {
  return (
    <>
      <div className="header"></div>
      <nav>
        <ul>
          {navbarLinks.map((eachLink, idx) => {
            const { path, name } = eachLink;
            return (
              <li key={idx}>
                <a href={path}>{name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Header;
