import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                <input
                      className="loginpage_text"
                      type="text"
                      placeholder="Mobile Number or Email"
                    ></input>
                     <input
                      className="loginpage_text"
                      type="text"
                      placeholder="Full Name"
                    ></input>
                     <input
                      className="loginpage_text"
                      type="text"
                      placeholder="User name"
                    ></input>
                    <input
                      className="loginpage_text"
                      type="password"
                      placeholder="Password"
                    ></input>
                    <button className="loginpage_button">Sign up</button>
            </div>
        );
    }
}

export default SignUp;