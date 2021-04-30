import React from "react";
import "./ContactMe.css";

function ContactMe(){
  return (
    <div class="container-md">
        <div class="row">
            <div class="col-sm-6">
               
                <section>
                    <div class="row">
                        <div class="col-sm-12">
                            <p id="sectiontitle">Contact</p>
                        </div>
                    </div>
                    
                  
                    <div class="row">
                        <div class="col-sm-8">
                            <form>
                               
                                <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                                </div>
                            
                                
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>

                               
                                <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                               
                                <div class="col-auto">
                                    <button type="submit" class="btn btn btn-info mb-2" id="submitEl">Submit</button>
                                </div>
                            </form>
                        </div>
                       
                        <div class="col-sm-4">
                            <aside class="clearfix">

                            </aside>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-8">
                            <p><a href="https://www.linkedin.com/in/jacqueline-rivera/"> Follow me On LinkedIn</a></p>
                        </div>
                    </div>
                   
                </section>

            </div>

          
            <div class="col-sm-6" id="infoCard">
             
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="200000"> 
                            <img class="d-block w-100" src="Images/GitHubPage.png" alt="First slide"/>
        
                                <div class="carousel-caption d-none d-md-block bg-dark mb-4">
                                    <h5> 
                                    <a href="https://github.com/Jacqueline8996">Github</a>
                                    <p>A link to all my github Repository/Page</p>
                                    </h5>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="Images/LinkedIn.png" alt="Second slide"/>
                            <div class="carousel-caption d-none d-md-block bg-dark mb-4">
                                <h5> 
                                <a href="https://www.linkedin.com/in/jacqueline-rivera/">LinkedIn</a>
                                <p>A link to my linkedin Profile</p>
                                </h5>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="Images/YoutubePage.png" alt="Third slide"/>
                            <div class="carousel-caption d-none d-md-block bg-dark mb-4">
                                <h5> 
                                <a href="https://www.youtube.com/channel/UCptERRYa6vAMis8rmbNSZEw/featured?view_as=subscriber">Youtube</a>
                                <p>A link to my personal Youtube page</p>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
            </div>
        
        </div>

  )
}

export default ContactMe;