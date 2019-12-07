import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/team">Team</NavLink>
          </li>
          <li>
            <NavLink to="/press">Press</NavLink>
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
