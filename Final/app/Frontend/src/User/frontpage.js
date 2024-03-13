import React, { useState} from "react";

import { NavLink, Link } from "react-router-dom";
import Secondnav from "./Pages/secondnav";

import { FaSearch,FaBell,FaUser,FaQuestionCircle  } from "react-icons/fa";



import "./frontpage.css";

function SearchBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleSearch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`search-bar ${isActive ? 'active' : ''}`}>
      <input type="text" placeholder="Search..." />
      <button onClick={toggleSearch}>
        <FaSearch />
      </button>
     
    </div>
  );
}

function Frontpage() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {/* First Navbar */}
      <nav className="f-navbar">
        <div className="f-nav-container">
          <NavLink exact to="/logo" className="f-nav-logo">
            <span>Tailor Cut</span>
          </NavLink>
        </div>
        <div className="f-search">
        <SearchBar />
        </div>
        <div className="f-navbar-links">
        <ul>
          <li>
            <Link to="/notification">
            <FaBell/>
            </Link>

          </li>
          <li>
            <Link to="/profile">
            <FaUser/>
            </Link>

          </li>
          <li>
            <Link to="/help">
            <FaQuestionCircle/>
            </Link>

          </li>
        </ul>
      </div>
      </nav>
      

      <Secondnav/>

     

      
    </>
  );
}

export default Frontpage;
