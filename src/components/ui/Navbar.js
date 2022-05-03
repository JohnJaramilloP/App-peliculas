import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./Navbar.css";
import { FaPlayCircle } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const [position, setPosition] = useState(0)

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  const navMenu = (e) => {
    setOpen(null);
  };

  window.onscroll = () => {
    let ScrollPos = window.pageYOffset;

    setPosition(ScrollPos)
  };

  return (
    <>
      <div className="hamburger__menu">
        <Hamburger
          className="hamburguer"
          duration={0.8}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <nav 
      className={`navbar ${isOpen ? "active" : null}`}
      style={ isOpen ? {top: `${position}px`} : null }
      >
        <Link className="navbar-brand" to="/" onClick={(e) => navMenu(e)}>
          <FaPlayCircle />
        </Link>

        <div className="navbar-group1">
          <div className="group">
            <NavLink
              className="nav-item"
              to="/accion"
              onClick={(e) => navMenu(e)}
            >
              Accion
            </NavLink>

            <NavLink
              className="nav-item"
              to="/terror"
              onClick={(e) => navMenu(e)}
            >
              Terror
            </NavLink>

            <NavLink
              className="nav-item"
              to="/search"
              onClick={(e) => navMenu(e)}
            >
              Búsqueda
            </NavLink>
          </div>
        </div>

        <div className="navbar-group2">
          <ul className="group">
            <h4 className="nav-title">Mi App de películas</h4>
            <button className="btn-nav" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};
