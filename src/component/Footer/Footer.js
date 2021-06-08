import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";
import Resume from "../../assets/Downloads/Jacqueline_Rivera_07JUN21.pdf"

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                Made by Jacqueline Rivera
                </div>
                <div className="col-lg-6">
                <a href={Resume} className="download" download>Download Resume</a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;