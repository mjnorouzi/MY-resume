import React, { Component } from "react";
import TitleAndIcons from "./secstions/TitleAndIcons";
import AboutSection from "./secstions/AboutSection";
import SkillSection from "./secstions/SkillSection";
import Navigation from "./secstions/navigation";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
  render() {
    
    return (
      
        <div className="App">
          {/* nav */}
          <Navigation />
          {/* first part */}
          <TitleAndIcons />
          {/* second part */}
          <AboutSection />
          {/* third part */}
          <SkillSection />
        </div>
      
    );
  }
}

export default App;
