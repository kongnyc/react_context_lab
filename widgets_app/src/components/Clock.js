import React, { useState,useEffect,useContext } from 'react'
import { ThemeContext } from '../providers/ThemeProvider';
import '../css/Clock.css'

const Clock =()=> {
        const { theme } = useContext(ThemeContext)
        const [clock,setClock]= useState([])
        const updateTime=()=>{
            setInterval(() => {
                setClock(new Date())
            }, 1000);
        }

        useEffect(()=>{
            updateTime()
        },[]);

        return (
            <div className={theme}>
                <h1>{clock.toLocaleString()}</h1>
            </div>
        )
    }


export default Clock
