import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./component/Portfolio";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;