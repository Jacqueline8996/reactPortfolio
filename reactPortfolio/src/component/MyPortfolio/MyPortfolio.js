import React from "react";
import "./MyPortfolio.css";
import CarouselItem from "../CarouselItem/CarouselItem";



class MyPortfolio extends React.Component {
   
    render () {
    return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-10">
                        <div class="row">
                            <div class="col-lg-12">
                                <p id="sectiontitle">Portfolio</p>
                                <p id= "instruction">(CLICK ON The name to be redirected to the pages)</p>
                            </div>
                        </div>
                        <CarouselItem/>
                     </div>
                </div>
            </div>
    </div>
    )}
}

export default MyPortfolio;