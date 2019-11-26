import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header: React.FC = () => {
  const [isOpen, useIsOpen] = useState(true);
  return (
    <>
      <header className="header">
        <div className="header__menu">
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/about">Team</NavLink>
            </li>
            <li>
              <NavLink to="/press">Press</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="header__menu--hamburger">-</div>
        </div>
      </header>
    </>
  );
};

export default Header;
