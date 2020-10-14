import React, { useState,useEffect } from 'react'
import './nav.css';
import logo from "./net.png";

function Nav() {
    const [show,handleShow]= useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100){
                handleShow(true);

            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }; 
        
    },[]);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src={logo}
            alt="NETFLIX"
            />
            
        </div>
    )
}

export default Nav

