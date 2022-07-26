import React from "react";
import { Component } from "react";

class Message extends Component {

    constructor() {
        super() // This is reqd because we extend reacts component class and a call has to be made to the base class constructor
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subcribe</button>
            </div>
        )
    }
}

export default Message;