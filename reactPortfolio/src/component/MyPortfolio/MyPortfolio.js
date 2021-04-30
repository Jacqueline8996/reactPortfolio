import React from "react";
import "./MyPortfolio.css";
import CarouselItem from "../CarouselItem/CarouselItem";



class MyPortfolio extends React.Component {
   
    render () {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 backDropImage">
                        <div className="row">
                            <div className="col-lg-12">
                                <p id="sectiontitle">Portfolio</p>
                                <p id= "instruction">(CLICK ON The name to be redirected to the pages)</p>
                            </div>
                            <CarouselItem/>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )}
}

export default MyPortfolio;