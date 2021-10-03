import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/home" exact>
        <img alt="" src="/images/logo192.png"></img>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-home"></i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/movies" exact>
              <i className="fas fa-camera"></i>Movies
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/country" exact>
              <i className="fas fa-globe-asia"></i>Country
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Imdb" exact>
              <i className="far fa-chart-bar"></i>IMDb
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gener" exact>
              <i className="far fa-copy"></i>Gener
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/series" exact>
              <i className="fas fa-bars"></i>Series
            </NavLink>
          </li>
        </ul>
        </div>
        <div id="search">
        <form>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </form>
      
      </div>
    </nav>
  );
};
export default Navbar;
