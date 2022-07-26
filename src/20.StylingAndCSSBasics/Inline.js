import React from 'react'
 
const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            {/* using class from css module stylesheet */}
            {/* <h1 className={Styles.success}>success</h1> */}

            {/* using class from regular css stylesheet */}
            <h1 className='error'>Error</h1>

            <h1 style={heading}>Inline</h1> {/* Inline styling example */}
        </div>
    )
}

export default Inline