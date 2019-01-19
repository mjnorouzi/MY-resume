import React, { Component } from "react";
import data from "../data.json";
import NavLink from "../component/nav/navLink";
import BtChangetheme from "../component/nav/btChangetheme";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="nav-wrapper">
          <BtChangetheme/>
          <div className="links-wrapper">
            {data.navigation.items.map((eachLink, index) => (
              <NavLink navlink={eachLink} key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
