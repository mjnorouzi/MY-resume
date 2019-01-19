import React, { Component } from "react";
import Fullpage from "../Fullpage";
import data from "../data.json";
import DownIcon from "../component/DownIcon"
import { Link, Element} from 'react-scroll'


class AboutSection extends Component {
  
  render() {
    return (
      <div>
      <Fullpage className="second" id="second">
        <h3>{data.sections[0].title}</h3>
        <div className="paragraphs">

          {data.sections[0].items.map((p,index) => {
            return <p key={index}>{p.content}</p>;
          })}
        </div>
      </Fullpage>
      <Link activeClass="active" to="Skill" spy={true} smooth={true} offset={50} duration={500} delay={0}>
            <DownIcon color={data.icons.down}/>
            </Link>

            <Element name="Skill" className="element" />
      </div>
    );
  }
}

export default AboutSection;
