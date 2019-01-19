import React, { Component } from "react";
import data from "../../data.json";
import "../../App.css"

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: data.icons.theme.white,
      down: data.icons.down.white
    };
      this.changeColor = this.changeColor.bind(this);
  }

  changeColor = () => {
    
    let color = Math.floor(Math.random() * 4);
    switch (color) {
      case 0:
        document.getElementById("first").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        document.getElementById("second").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        document.getElementById("third").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        document.getElementById("up").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        document.body.style.color = "yellow";
        this.setState({theme:data.icons.theme.white})
        break;
      case 1:
        document.getElementById("first").style.backgroundColor = "rgba(163, 0, 0, 0.6)";
        document.getElementById("second").style.backgroundColor = "rgba(163, 0, 0, 0.6)";
        document.getElementById("third").style.backgroundColor = "rgba(163, 0, 0, 0.6)";
        document.getElementById("up").style.backgroundColor = "rgba(163, 0, 0, 0.6)";
        document.body.style.color = "white";
        this.setState({theme:data.icons.theme.white})
        break;
      case 2:
        document.getElementById("first").style.backgroundColor = "rgba(41, 4, 253, 0.6)";
        document.getElementById("second").style.backgroundColor = "rgba(41, 4, 253, 0.6)";
        document.getElementById("third").style.backgroundColor = "rgba(41, 4, 253, 0.6)";
        document.getElementById("up").style.backgroundColor = "rgba(41, 4, 253, 0.6)";
        document.body.style.color = "rgb(0, 255, 0)";
        this.setState({theme:data.icons.theme.white})
        break;
      case 3:
        document.getElementById("first").style.backgroundColor = "rgba(68, 67, 67, 0.9)";
        document.getElementById("second").style.backgroundColor = "rgba(68, 67, 67, 0.9)";
        document.getElementById("third").style.backgroundColor = "rgba(68, 67, 67, 0.9)";
        document.getElementById("up").style.backgroundColor = "rgba(68, 67, 67, 0.9)";
        document.body.style.color = "black";
        this.setState({theme:data.icons.theme.black})
        break;
      default:
    }
  };

  render() {
    return (
      <div className="BT" onClick={this.changeColor}>
        <img src={this.state.theme} alt="" />
      </div>
    );
  }
}

export default Navigation;
