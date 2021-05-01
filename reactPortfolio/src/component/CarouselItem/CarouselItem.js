import React from "react";
import "./CarouselItem.css";
import Carousel from 'react-bootstrap/Carousel'
import FirstImage from "../../assets/Images/LetsPlanADay.png";
import SecondImage from "../../assets/Images/pokemonCard.png";
import ThirdImage from "../../assets/Images/RetroBurger.png";
import FourImage from "../../assets/Images/WeatherDash.png";
import FithImage from "../../assets/Images/QuizStart.png";
import SixImage from"../../assets/Images/noteTaker.png";
import SevenImage from"../../assets/Images/DemoTeam.png";

const SLIDE = [
    { alt:"First slide",title:'Lets Plan A Day',href:"https://github.com/nvandenberge/LetsPlanADay",src:`${FirstImage}`,Description:"Enter a locartion to get a random location and food", state:" carousel-item active"},
    { alt:"Second slide",title:'Pokemon Card game',href:"https://vast-forest-11479.herokuapp.com/",src:`${SecondImage}`,Description:"Demonstrated the base information of CRUD by utilizing a popular card-game in order to create personalized decks for each individual user that can be updated, modified and deleted.",state:"carousel-item"},
    { alt:"Third slide",title:'Retro Burger',href:"https://gentle-temple-81178.herokuapp.com/",src:`${ThirdImage}`,Description:"This app will allow users to add Burgers of there choice. They then will be able to determine what to do with added burgers. If they have been uneaten then they can be consumed or delted. Once Eaten the burger can be deleted.",state:"carousel-item"},
    { alt:"Fourth slide",title:'Weather Dashboard',href:"https://github.com/nvandenberge/LetsPlanADay",src:`${FourImage}`,Description:"A Weather dashboard where you can place your zip code and get a daily and a 5day forcast ",state:"carousel-item"},
    { alt:"Fith slide",title:'Quiz game',href:"https://jacqueline8996.github.io/Homework4/",src:`${FithImage}`,Description:"A Timead Quiz used to test knowledge of coding and will be keeping the score of the user.",state:"carousel-item"},
    { alt:"Six slide",title:'Note Taker',href:"https://frozen-journey-71877.herokuapp.com/",src:`${SixImage}`,Description:"A responsive Note taking application",state:"carousel-item"},
    { alt:"Seven slide",title:'Team Profile',href:"https://github.com/Jacqueline8996/TeamProfile",src:`${SevenImage}`,Description:"Using node moduels you are able to create a team profile"},
]

class CarouselItem extends React.Component {

    render(){
        return (
        <Carousel>
            {SLIDE.map(sl => (
            <Carousel.Item key={sl.alt} className = "my-4"interval={70000}>
                <img
                    className="d-block w-300 image align-items-start"
                    src={sl.src}
                    alt={sl.alt}
                />
                <div className = "captionDiv">
                <Carousel.Caption className = "bg-dark mb-4  " id ="#divInfo">
                    <a href ={sl.href} className = "title">{sl.title}</a>
                    <p className = "description">{sl.Description}</p>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            ))}
        </Carousel>
        );
    }
}

export default CarouselItem;