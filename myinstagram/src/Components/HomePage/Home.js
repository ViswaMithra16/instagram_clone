import react, { Component } from 'react';
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import './Home.css';

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isLogin: true,
        };
    }
    render(){
        return(
            <div>
                <NavBar/>
                <MainContent/>
            </div>
        );
    }
}

export default Home;