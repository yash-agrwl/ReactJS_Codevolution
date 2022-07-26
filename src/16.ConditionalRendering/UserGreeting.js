import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // Method4: Short Circuit Operator - this approach is just a specific case of method3. 
        // We use this method when we want to render something or nothing based on a condition.
        return this.state.isLoggedIn && <div>Welcome Vishwas</div>

        // // Method3: Ternary Conditional Operator
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Vishwas</div> :
        //     <div>Welcome Guest</div>
        // )

        // // Method2: Element Variables
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Vishwas</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        
        // // Method1: if/else
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Vishwas</div>
        // }
        // else {
        //     return <div>Welcome Guest</div>
        // }

        // // Without conditional Rendering
        // return (
        //     <div>
        //         <div>Welcome Vishwas</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting