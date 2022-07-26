// Example of Destructuring props in Functional Components.
import React from "react";

// Method 1: Destructure props in the function parameter itself.
// const Greet = ({name, heroName}) => {
//     return <h1>Hello {name} a.k.a {heroName}</h1>
// }

//Method 2: Destructure props in the function body.
const Greet = (props) => {
    const {name, heroName} = props
    return <h1>Hello {name} a.k.a {heroName}</h1>
}

export default Greet;