import React from "react";
import { Component } from "react";

class Greet extends Component {
    render(){
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroname}</h1>
    }
}

export default Greet;