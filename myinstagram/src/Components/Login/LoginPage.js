import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@material-ui/core/Grid";
import insta_image from "../../images/9364675fb26a.svg";
import insta_logo from "../../images/logoinsta.png";
import fbicon from "../../images/fb.png";
import appstore from "../../images/app.png";
import playstore from "../../images/play.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  changeLogin = () => {
    if (this.state.isLogin) this.setState({ isLogin: false });
    else this.setState({ isLogin: true });
  };
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage_main">
              <div>
                <img src={insta_image} width="454px" />
              </div>
              <div>
                <div className="loginpage_rightcomponent">
                  <img className="loginpage_logo" src={insta_logo} />
                  <div className="loginpage_signin">
                    {this.state.isLogin ? <SignIn /> : <SignUp />}
                    <div className="loginpage_ordiv">
                      <div className="loginpage_divider"></div>
                      <div className="login_or">OR</div>
                      <div className="loginpage_divider"></div>
                    </div>
                    <div className="loginpage_fb">
                      <img
                        src={fbicon}
                        width="15px"
                        style={{ marginRight: "5px" }}
                      ></img>
                      Log in with Facebook
                    </div>
                    <div className="loginpage_forgot">Forgot Password?</div>
                  </div>
                </div>
                <div className="loginpage_signupoption">
                  {this.state.isLogin ? (
                    <div className="loginpage_signin">
                      Don't have an account?
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#0395F6" }}
                      >
                        Sign up
                      </span>
                    </div>
                  ) : (
                    <div className="loginpage_signup">
                      Have an account?{" "}
                      <span
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#0395F6" }}
                      >
                        {" "}
                        Sign in
                      </span>
                    </div>
                  )}
                </div>
                <div className="loginpage_downloadSection">
                  <div>Get the app</div>
                  <div className="loginpage_option">
                    <img
                      className="loginpage_dwimg"
                      src={appstore}
                      width="136px"
                    ></img>
                    <img
                      className="loginpage_dwimg"
                      src={playstore}
                      width="136px"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
