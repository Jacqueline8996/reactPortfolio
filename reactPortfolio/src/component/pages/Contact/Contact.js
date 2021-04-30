import React from "react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Wrapper from "../../Wrapper/Wrapper";
import ContactMe from "../../ContactMe/ContactMe"
function Contact(){
  return (
  <div>
    <NavBar />
    <Wrapper>
      <ContactMe/>
    </Wrapper>
    <Footer/>
  </div>
  )
}

export default Contact;
