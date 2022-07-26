import React, { Component } from 'react'

class RefsDemo1 extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
        // It is common to create Refs in the constructor so that they can be referenced throughout the component.

    }

    componentDidMount() {

        console.log(this.inputRef)

        /* After a reference is created, the property 'this.inputRef' holds an object having a property called current,
         which points to the actual DOM node.
            So, to focus on the element on loading, we simply call the focus method on the current property in componentDidMount. */

        this.inputRef.current.focus()

    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
        // Second UseCase - to fetch the input value on click of a button using refs.
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo1

/*steps to make a element focussed on loading using refs:
1. Create a ref - We do that using React.createRef method
2. Attach this ref to the element in the render method - We do that using the reserved 'ref' attribute on the element.
3. Call the focus method on this element. */