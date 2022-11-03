import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>Instant</h1>
      </div>
      <div className="navigation">
        <ul>
          <NavLink to="/">
            <li>Présentation</li>
          </NavLink>
          <NavLink to="/founders">
            <li>Fondateurs</li>
          </NavLink>
          <NavLink to="/registration">
            <li>
              <span>Pré-Inscription</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
