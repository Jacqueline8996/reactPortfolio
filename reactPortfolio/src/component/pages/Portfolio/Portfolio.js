import React from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Wrapper from "../../Wrapper/Wrapper";
import MyPortfolio from "../../MyPortfolio/MyPortfolio"

function About() {
  return (
    <div>
    <NavBar />
    <Wrapper>
      <MyPortfolio/>
    </Wrapper>
    <Footer/>
  </div>

  );
}

export default About;