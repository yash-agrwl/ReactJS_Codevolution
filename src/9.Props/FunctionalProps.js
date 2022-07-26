import React from "react";

// const Greet = (props) => <h1>Hello {props.name}</h1>

const Greet = (props) => {
    console.log(props); // for printing the 'props' object in the console.
    return <div>
        <h1>Hello {props.name} a.k.a {props.heroname}</h1>
        {props.children}
    </div>
}

export default Greet;