import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        // alert('Hello' + this.state.parentName)
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent

/* Steps on how we pass methods as props in react componenets:
1. In the parent component, define the method
2. On the child component tag, pass the method as a prop
3. In the child component, access the method using the prop object. 
And if at all we have to pass a parameter, use the arrow functions in tags. */