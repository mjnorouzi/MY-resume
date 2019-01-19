import React, { Component } from "react";
import Fullpage from "../Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../component/DownIcon"
import { Link, Element} from 'react-scroll'

class TitleAndIcons extends Component {
    render() {
        return (
            <div>
            <Element name="first" className="element" />
            <Fullpage className="fullpage first" id="first">
            <h1 className="title">{data.title}</h1>
            <div>
                <h2>{data.subtitle}</h2>
            </div>
            <div className="icons-wrapper">
                {Object.keys(data.links).map((keys,index) => {
                return (
                <div className="icon" key={index}>
                    <SocialIcon url={data.links[keys]} />
                </div>
                );
                })}
            </div>
            
            </Fullpage>
            <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
            <DownIcon color={data.icons.down}/>
            </Link>

            <Element name="About" className="element" />

            </div>
        );
    }
}

export default TitleAndIcons;
