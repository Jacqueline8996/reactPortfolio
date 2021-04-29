import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar.js";
import Footer from "./component/Footer/Footer.js";
import About from "./component/pages/About/About.js";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
// import Wrapper from "./component/Wrapper/Wrapper";

function App() {
  return (
 
    
    <div>
        <NavBar></NavBar>
        <About></About>
        <Footer></Footer>
    </div>
  
  );
}

export default App;