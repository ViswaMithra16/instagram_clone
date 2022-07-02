import react, { Component } from "react";
import "./StatusBar.css";
import { Avatar } from "@material-ui/core";
import statusimg from "../../images/pp1.png";

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: []
    }
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    let data = [
      {
        "username": "mithra_vallabhaneni",
        "imageURL": "../../images/pp1.png",
      },
      {
        "username": "vijay_devarakonda",
        "imageURL": "../../images/pp1.png",
      },
      {
        "username": "urstrulymahesh",
        "imageURL": "../../images/pp1.png",
      }
    ]
    this.setState({ statusList: data });
  };
  render() {
    return (
      <div>
        <div className="statusbar_container">
          {this.state.statusList.map((item, index)=> {
            <div className="status">
                <Avatar className="statusbar__status" src={statusimg}/>
                <div className="statusbar__text">{item.username}</div>
                </div>
          })}
        </div>
      </div>
    );
  }
}

export default StatusBar;
