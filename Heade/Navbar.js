import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from '../../assets/logo.png';
import './Navbar.css'

 const Navbar = () => {
    const [stmenu, setmenu] = useState("");
  return (
    <header className="navbar">
    <Link to="/" className="logo">
      <img
        src={logo}
        alt="logo"
        className="logo-imag"
      />
    </Link>

    <ul className={`nav-link ${stmenu}`}>
      <li className="dropdown">
        <Link to="#residences" className="dropbtn">
        Résidences
        </Link>
      </li>
      <li className="dropdown">
        <Link to="/location" className="dropbtn">
        Location{" "}
        </Link>
      </li>
      <li className="dropdown">
        <Link to="/Vente" className="dropbtn">
        Vente{" "}
        </Link>
      </li>
      <li className="dropdown">
        <Link to="mail" className="dropbtn">
        Contact{" "}
        </Link>
      </li>
      <li className="dropdown">
        <Link to="mail" className="dropbtn">
        Contact{" "}
        </Link>
      </li>
      <li><img className="icon-user" src="../../public/icon/menu.png" alt="" /></li>
  {/* <li className="icon-user"> <AccountCircleIcon/></li> */}
    </ul>

    <img
      src="icon/menu.png"
      alt=""
      className="menu-burger"
      onClick={() => {
        setmenu(stmenu === "" ? "mobile-menu" : "");
      }}
    />
  
  </header>
  );
};
export default Navbar
