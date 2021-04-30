import React from "react";
import "./ContactMe.css";
import WorkCaro from "../WorkCaro/WorkCaro";

function ContactMe(){
  return (
    <div className="container-md .px-2 .m-1">
        <div className="row align-items-center">
            <div className="col-sm-6">
                <section>
                    <div className="row">
                        <div className="col-sm-12">
                            <p id="sectiontitle">Contact</p>
                        </div>
                    </div>
            
                    <div className="row">
                        <div className="col-sm-8">
                            <form>
                                <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Name</label>
                                <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn btn-info mb-2" id="submitEl">Submit</button>
                                </div>
                            </form>
                        </div>
                       
                        <div className="col-sm-4">
                            <aside className="clearfix">

                            </aside>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <p><a href="https://www.linkedin.com/in/jacqueline-rivera/"> Follow me On LinkedIn</a></p>
                        </div>
                    </div>
                   
                </section>

            </div>

            <div className="col-sm-6">
                <section>
                     <WorkCaro/>
                </section>
            </div>
        
        </div>
    </div>

  )
}

export default ContactMe;