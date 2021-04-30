import React from "react";
// import { Link } from "react-router-dom";
import JacquelineRivera from "../../assets/Images/JacquelineRivera.jpg"
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="col-md-8 align-items-center">
        <section>
            <div className="row d-flex justify-content-end">
                <div className="col-md-12 ">
                    <p id="sectiontitle">About me</p>
                </div>
            
                <div className="col-md-12">
                    <img src={JacquelineRivera} alt="JacquelineRivera" id="image1" ></img>
                    <p className="ParaText">
                        I graduated from the University of Maryland Baltimore County otherwise known as UMBC in 2018. 
                        I obtained my Bachlores in Science in Biological Science with a minor in Psychology. 
                        During my Time at UMBC I was very active in the latino Community ,since both of my Parents are from El Salvador.
                        Due to that  I am fluent in Spanish. Currently I work as a Data coordinator at Catalent Gene Therapy.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <p className="ParaText">
                        Currently Advancing skills as a Full-Stack developer with a strong Scientific Background  able to provide a new perspective. 
                        As well as background in spanish to include a wider target audience .
                        Working As a Quality Control Associate , has provided me with an eye to detail in order to assure the best product. 
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <p className="ParaText">
                        In my free time I like to paint and draw.
                        I especially like the hispanic/Latin elements of painters like Diego Rivera and Frida Kahlo. 
                        This year I started a Youtube page, which I am trying to become more active on. 
                        I have included links to my socials on the profile page.
                    </p>
                </div>
            </div>
        </section>
    </div>
  );
}

export default AboutMe;