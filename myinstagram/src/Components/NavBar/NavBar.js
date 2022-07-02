import react, { Component } from 'react';
import './NavBar.css';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";
import insta_logo from '../../images/logoinsta.png';
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import find from '../../images/find.svg';
import reaction from '../../images/love.svg';
import pp from '../../images/pp1.png';



class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isLogin: true,
        };
    }
    render(){
        return(
            <div>
                <div className="navbar_barContent">
                    <Grid container>
                        <Grid item xs ={2}></Grid>
                        <Grid item xs ={3}>
                            <img className="navbar_logo"src={insta_logo} width="105px" />
                        </Grid>
                        <Grid item xs ={3}>
                            <input type= "text" className='navbar__searchBar' placeholder="Search " />
                        </Grid>
                        <Grid item xs={3} style ={{"display":"flex"}}>
                            <img className="navbar__img" src={home} width = "25px"/>
                            <img className="navbar__img" src={message} width = "25px"/>
                            <img className="navbar__img" src={find} width = "25px"/>
                            <img className="navbar__img" src={reaction} width = "25px"/>
                            <Avatar src={pp} className="navbar__img" style={{"maxWidth":"25px","maxHeight":"25px"}}></Avatar>
                        </Grid>
                        <Grid item xs ={1}></Grid>

                    </Grid>

                </div>
            </div>
        );
    }
}

export default NavBar;