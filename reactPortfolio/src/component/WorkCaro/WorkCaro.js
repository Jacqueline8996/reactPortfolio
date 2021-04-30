import React from "react";
import "./WorkCaro.css";
import Carousel from 'react-bootstrap/Carousel'
import FirstImage from "../../assets/Images/GitHubPage.png";
import SecondImage from "../../assets/Images/LinkedIn.png";
import ThirdImage from "../../assets/Images/YoutubePage.png";

const SLIDE = [
    { alt:"First slide",title:'Github',href:"https://github.com/Jacqueline8996",src:`${FirstImage}`,Description:"A link to all my github Repository/Page", state:" carousel-item active"},
    { alt:"Second slide",title:'A link to my linkedin Profile',href:"https://www.linkedin.com/in/jacqueline-rivera/",src:`${SecondImage}`,Description:"Follow me On LinkedIn",state:"carousel-item"},
    { alt:"Third slide",title:'A link to my personal Youtube page',href:"https://www.youtube.com/channel/UCptERRYa6vAMis8rmbNSZEw/featured?view_as=subscriber",src:`${ThirdImage}`,Description:"A link to my personal Youtube page",state:"carousel-item"},
]

class WorkCaro extends React.Component {

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

export default WorkCaro;