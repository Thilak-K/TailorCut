import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { BsBorderStyle } from "react-icons/bs";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaStore,
  FaRulerVertical,
  FaShoppingCart,
} from "react-icons/fa";
import "./shops.css";

function Secondnav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {/* Second Navbar */}
      <nav className="s-navbar">
        <div className="s-nav-container">
          <ul className={click ? "s-nav-menu active" : "s-nav-menu"}>
            <li className="s-nav-item">
              <NavLink
                to="/frontpage"
                activeClassName="active"
                className="s-nav-links"
                onClick={handleClick}
              >
                {" "}
                <FaHome />
                Home
              </NavLink>
            </li>
            <li className="s-nav-item">
              <NavLink
                exact
                to="/shops"
                activeClassName="active"
                className="s-nav-links"
                onClick={handleClick}
              >
                <FaStore />
                Shops
              </NavLink>
            </li>
            <li className="s-nav-item">
              <NavLink
                exact
                to="/measurements"
                activeClassName="active"
                className="s-nav-links"
                onClick={handleClick}
              >
                {" "}
                <FaRulerVertical />
                Measurments
              </NavLink>
            </li>
            <li className="s-nav-item">
              <NavLink
                exact
                to="/cart"
                activeClassName="active"
                className="s-nav-links"
                onClick={handleClick}
              >
                <FaShoppingCart />
                Cart
              </NavLink>
            </li>
            <li className="s-nav-item">
              <NavLink
                exact
                to="/myorders"
                activeClassName="active"
                className="s-nav-links"
                onClick={handleClick}
              >
                <BsBorderStyle />
                My Orders
              </NavLink>
            </li>
            <li className="s-nav-item">
              <NavLink
                exact
                to="/settings"
                activeClassName="active"
                className="s-nav-links"
                onClick={handleClick}
              >
                <IoMdSettings />
                Settings
              </NavLink>
            </li>
          </ul>

          <div className="s-nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <FaBars />{" "}
              </span>
            ) : (
              <span className="icon">
                <FaTimes />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Secondnav;
