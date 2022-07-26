import React from 'react';
import './myStyles.css';

function Stylesheet(props) {

    //Conditional application of class based on props or state of the component
    let className = props.primary ? 'primary' : '';
    return (
      <div>
        <h1 className={`${className} font-xl`}>Stylesheets</h1> {/* applied multiple css classes using template literals */}

        <h1 className={className}>Stylesheets</h1> {/* applied single css class */}
      </div>
    )


    // // Direct application of css classes
    // return (
    //     <div>
    //         <h1 className='primary'>Stylesheets</h1>
    //     </div>
    // )
}

export default Stylesheet