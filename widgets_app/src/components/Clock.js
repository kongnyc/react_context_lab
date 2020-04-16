import React, { useState,useEffect } from 'react'

const Clock =()=> {

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
            <div>
                <b>{clock.toLocaleString()}</b>
            </div>
        )
    }


export default Clock
