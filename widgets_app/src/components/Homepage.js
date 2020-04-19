import React, { useContext} from 'react';
import { ThemeContext } from '../providers/ThemeProvider';
import '../css/Home.css'

const Homepage=()=> {
        const { theme } = useContext(ThemeContext);
        
        return (
            <div className={theme}>
                <h1 className="homeHeader">Welcome to My widgets</h1>
            </div>
        )
    }

export default Homepage
