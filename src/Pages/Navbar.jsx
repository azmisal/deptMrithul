import React from 'react'
import "./Navbar.css"
import Logo from "../Assets/logo.png"
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="innerBar">
                <div className="logo">
                    <img src={Logo} alt="" className='logoImg' />
                </div>
                <div className="navLinks">
                    <a href="#" className='link'>HOME</a>
                    <a href="#" className='link'>ABOUT</a>
                    <a href="#" className='link'>ACADEMICS</a>
                    <a href="#" className='link'>PEOPLE</a>
                    <a href="#" className='link'>RESEARCH</a>
                    <a href="#" className='link'>GALLERY</a>


                </div>
            </div>
        </div>
    )
}

export default Navbar