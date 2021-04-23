import React from "./node_modules/react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                Made by Jacqueline Rivera
                </div>
                <div class="col-lg-6">
                <a href="src/component/assets" class="download" Download>Download Resume</a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;