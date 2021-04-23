import React from "./node_modules/react";
import "./style.css";

function NavBar() {
  return (
    <nav class="navbar navbar-light navbar-expand-lg">

        <a class="navbar-brand text-white" href="index.html">JacquelineRivera</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar1">
            
            <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
                <a class="nav-link" href="assets/contact.html">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="assets/portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="index.html">About</a>
            </li>

            </ul>
        </div>
    </nav>
  );
}

export default NavBar;