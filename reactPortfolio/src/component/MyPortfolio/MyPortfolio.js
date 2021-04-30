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


// class MyPortfolio extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             values: []
//         }
//     }

//     handleButton = button => {
//         let tmp = this.state.values;
//         if (this.state.values.includes(button)) {
//             this.setState({
//                 values: this.state.values.filter(el => el !== button)
//             })
//         } else {
//             tmp.push(button);
//             this.setState({
//                 values: tmp
//             })
//         }
//     }

//     render () {
//     return (
//     <div>
//         <div class="container">
//             <div class="row">
//                 <div class="col-md-10">
//                         <div class="row">
//                             <div class="col-lg-12">
//                                 <p id="sectiontitle">Portfolio</p>
//                                 <p id= "instruction">(CLICK ON The name to be redirected to the pages)</p>
//                             </div>
//                         </div>
//                         <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//                             <div class="carousel-inner">
//                             <div class="carousel-item active" data-bs-interval="300000">
//                                 <img class="d-block w-100" src={FirstImage} alt="First slide"/>
//                                 <div class="carousel-caption d-none d-md-block bg-dark mb-4" id="divInfo">
//                                     <h5> 
//                                     <a href="https://github.com/nvandenberge/LetsPlanADay">Lets Plan A Day</a>
//                                     </h5>
//                                     <p>Enter a locartion to get a random location and food </p>
//                                 </div>
//                             </div>
//                             <div class="carousel-item">
//                                 <img class="d-block w-100" src={SecondImage} alt="Second slide"/>
//                                 <div class="carousel-caption d-none d-md-block bg-dark mb-4">
//                                     <h5> 
//                                     <a href="https://vast-forest-11479.herokuapp.com/">Pokemon Card game</a>
//                                     <p>Demonstrated the base information of CRUD by utilizing a popular card-game in order to create personalized decks for each individual user that can be updated, modified and deleted. </p>
//                                     </h5>
//                                 </div>
//                             </div>
//                             <div class="carousel-item">
//                                 <img class="d-block w-100" src={ThirdImage} alt="Third slide"/>
//                                 <div class="carousel-caption d-none d-md-block bg-dark mb-4">
//                                     <h5> 
//                                     <a href="https://gentle-temple-81178.herokuapp.com/">Retro Burger</a>
//                                     <p> This app will allow users to add Burgers of there choice. They then will be able to determine what to do with added burgers. If they have been uneaten then they can be consumed or delted. Once Eaten the burger can be deleted.</p>
//                                     </h5>
//                                 </div>
//                             </div>
//                             <div class="carousel-item">
//                                 <img class="d-block w-100" src={FourImage} alt="fourth slide"/>
//                                 <div class="carousel-caption d-none d-md-block bg-dark mb-4">
//                                     <h5> 
//                                     <a href="https://jacqueline8996.github.io/Homework6/">Weather Dashboard</a>
//                                     <p> A Weather dashboard where you can place your zip code and get a daily and a 5day forcast </p>
//                                     </h5>
//                                 </div>
//                             </div>
//                             <div class="carousel-item">
//                                 <img class="d-block w-100" src={FithImage} alt="Fith slide"/>
//                                 <div class="carousel-caption d-none d-md-block bg-dark mb-4">
//                                     <h5> 
//                                     <a href="https://jacqueline8996.github.io/Homework4/">Quiz game</a>
//                                     <p>A Timead Quiz used to test knowledge of coding and will be keeping the score of the user.</p>
//                                     </h5>
//                                 </div>
//                             </div>
//                             <div class="carousel-item">
//                                 <img class="d-block w-100" src={SixImage} alt="Six slide"/>
//                                 <div class="carousel-caption d-none d-md-block bg-dark mb-4">
//                                     <h5> 
//                                     <a href="https://frozen-journey-71877.herokuapp.com/">Note Taker</a>
//                                     <p>A responsive Note taking application </p>
//                                     </h5>
//                                 </div>
//                             </div>
                            
//                             </div>
                            
//                             <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//                             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                             <span class="sr-only">Previous</span>
//                             </a>
//                             <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//                             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                             <span class="sr-only">Next</span>
//                             </a>
//                         </div>
//                         </div>
//                 </div>
//             </div>
    
//     </div>
//     )}
// }

// export default MyPortfolio;
