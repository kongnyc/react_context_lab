import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar=()=>{
    return(<>
    <nav>
    <NavLink className="inactive" activeClassName="active" exact to={"/"}>Home</NavLink>
    <NavLink className="inactive" activeClassName="active" exact to={"/weather"}>Weather</NavLink>
    <NavLink className="inactive" activeClassName="active" exact to={"/clock"}>Clock</NavLink>
    </nav>

    </>)
}

export default NavBar