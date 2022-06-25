import React, { Component } from "react";
import "../Login/LoginPage.css";
class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return (
            <div>
                <input
                      className="loginpage_text"
                      type="text"
                      placeholder="Phone number, username, or email"
                    ></input>
                    <input
                      className="loginpage_text"
                      type="password"
                      placeholder="Password"
                    ></input>
                    <button className="loginpage_button">Log In</button>
            </div>

        );
    }
}

export default SignIn;