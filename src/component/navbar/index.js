import React from "./node_modules/react";
import "./style.css";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav class="navbar navbar-light navbar-expand-lg">

        <a class="navbar-brand text-white">JacquelineRivera</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar1">
            
            <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }>  About
            </Link>
            </li>
            <li class="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} >
              Portfolio
            </Link>
            </li>
            <li class="nav-item active">
            <Link
              to="/Contact"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} >
              Contact
            </Link>
            </li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;