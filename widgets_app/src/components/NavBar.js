import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../providers/ThemeProvider';
import "../css/NavBar.css";

const NavBar=()=>{
    const { toggleTheme, theme } = useContext(ThemeContext);
    return(<>
    <nav>
    <NavLink className="inactive" activeClassName="active" exact to={"/"}>Home</NavLink>
    <NavLink className="inactive" activeClassName="active" exact to={"/weather"}>Weather</NavLink>
    <NavLink className="inactive" activeClassName="active" exact to={"/clock"}>Clock</NavLink>
    <button onClick={toggleTheme}>Toggle Theme: {theme}</button>
    </nav>

    </>)
}

export default NavBar