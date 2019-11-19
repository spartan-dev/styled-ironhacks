import React from 'react'
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <h1>Hola pepito</h1>
            <NavLink to="/uikit">
            <button> directo a los uikit</button>
                </NavLink> 
        </div>
    )
}

export default Home
