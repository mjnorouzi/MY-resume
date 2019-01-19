import React, { Component } from "react";
import { Link} from "react-scroll";

class NavLink extends Component {
  render() {
    const { navlink } = this.props;
    return (
      <Link
        activeClass="active"
        to={navlink.link}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        delay={0}
      >
        <div className="links">{navlink.link}</div>
      </Link>
    );
  }
}

export default NavLink;
