import React, { Component } from "react";
import Fullpage from "../Fullpage";
import data from "../data.json";
import SkillCard from "../component/SkillCard"
import UpIcon from "../component/UpIcon"
import { Link} from 'react-scroll'


class SkillSection extends Component {
  render() {
    return (
      <div>
      <Fullpage className="third" id="third">
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map((eachSkill,index) => <SkillCard skill={eachSkill} key={index}/>
          )}
        </div>
      </Fullpage>
            <Link activeClass="active" to="first" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
            <UpIcon color={data.icons.down}/>
            </Link>
      </div>
    );
  }
}

export default SkillSection;
