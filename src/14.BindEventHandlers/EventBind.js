import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        //this.clickHandler = this.clickHandler.bind(this) 
        // Because the binding happens once in the constructor, this is better compared to binding in render method
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    // }

    //Method4
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Method1: binding in the render method */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* Method2: using arrow functions in the render method */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}

                {/*Method3: binding the eventHandler in the Class constructor as appossed to binding in the render method */}
                {/* <button onClick={this.clickHandler}>Click</button> */}

                {/*Method4: use an arrow function as a class Property i.e. change the way we define a method in the class */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind