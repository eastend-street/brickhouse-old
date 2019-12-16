import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.scss";

import Burger from "@animated-burgers/burger-rotate";
import "@animated-burgers/burger-rotate/dist/styles.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__menu">
        <ul>
          <li>
            <HashLink smooth={true} to="/">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth={true} to="#team">
              Team
            </HashLink>
          </li>
          <li>
            <HashLink smooth={true} to="#press">
              Press
            </HashLink>
          </li>
          <li>
            <HashLink smooth={true} to="#contact">
              Contact
            </HashLink>
          </li>
        </ul>
        <Burger
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="header__menu--hamburger"
        />
      </div>
      {isOpen && (
        <>
          <div className="header__mask" onClick={() => setIsOpen(false)} />
          <div className="header__hidden-menu" onClick={() => setIsOpen(false)}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/team">Team</NavLink>
              </li>
              <li>
                <NavLink to="/press">Press</NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
