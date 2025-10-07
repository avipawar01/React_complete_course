// Components 

import React from "react";


// 1. Functional Components
// 2. Class-Based Components



function Navbar() {
    return (
        <>
            <div>
                <h1>Avinash</h1>
            </div>  

            <div>

            </div>
        </>
    )
}

export default Navbar;



// Class-Based Components
export class Navbar2 extends React.Component {
    render() {
        return (
            <h1>Hello I am Avinash</h1>
        )
    }
}

