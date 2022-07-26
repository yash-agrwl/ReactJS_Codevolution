import React, { Component } from 'react'

class RefsDemo2 extends Component {
    constructor(props) {
        super(props)

        this.cbRef = null

        this.setCbRef = (element) => {
            this.cbRef = element
        }

    }

    componentDidMount() {

        console.log(this.cbRef)

        if (this.cbRef) {
            this.cbRef.focus()
        }

    }

    clickHandler = () => {
        alert(this.cbRef.value)
        // Second UseCase - to fetch the input value on click of a button using callback refs.
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo2

/*steps to make a element focussed on loading using refs:
1. Create a ref - We do that using React.createRef method
2. Attach this ref to the element in the render method - We do that using the reserved 'ref' attribute on the element.
3. Call the focus method on this element. */

/* There are 4 simple steps to focus an element using the callback refs approach:
1. Create a ref - */