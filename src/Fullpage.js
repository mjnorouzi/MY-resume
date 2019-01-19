import React, {Component} from 'react';
import "./App.css"

class Fullpage extends Component {
    render(){
        const { children,id } = this.props
        return(
            <div className={`fullpage ${this.props.className || ''}`} id={id}>
                {children}
            </div>
        )
    }
}

export default Fullpage;