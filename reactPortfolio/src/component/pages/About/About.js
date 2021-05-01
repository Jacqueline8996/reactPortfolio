import React from "react";
import "./About.css";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Wrapper from "../../Wrapper/Wrapper";
import AboutMe from "../../AboutMe/AboutMe";

function About() {
  return (
    <div>
    <NavBar />
    <Wrapper>
      <AboutMe />
    </Wrapper>
    <Footer/>
    </div>

  );
}

export default About;