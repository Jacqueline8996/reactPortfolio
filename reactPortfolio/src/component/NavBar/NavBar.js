import React from "react";
import "./NavBar.css";
// import { Link, useLocation } from "react-router-dom";

function NavBar() {
 
  // const location = useLocation();
  return (
    <nav className="navbar navbar-light navbar-expand-lg">

        {/* <a className="navbar-brand text-white">JacquelineRivera</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar1">
            
          <ul className="navbar-nav ml-auto">
              
            <li className="nav-item active">
                {/* <a className="nav-link" href="contact.html">Contact</a> */}
                a
            </li>
      
            <li className="nav-item ">
                {/* <a className="nav-link" href="portfolio.html">Portfolio</a> */}
                a
            </li>

            
            <li className="nav-item ">
                {/* <a className="nav-link" href="../index.html">About</a> */}
                a
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;