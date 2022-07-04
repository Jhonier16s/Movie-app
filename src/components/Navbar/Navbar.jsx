import React, {useRef} from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <>
      <header>
        <h3>logo</h3>
        <nav ref={navRef}>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "NavBar-item")}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "NavBar-item")}
            to="/Categories"
          >
            Categories
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "NavBar-item")}
            to="/Populars"
          >
            Populars
          </NavLink>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <FaBars/>
        </button>
      </header>
    </>
  );
};

export default Navbar;
