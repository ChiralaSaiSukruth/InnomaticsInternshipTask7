import React from 'react'
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom"

export const Navbar = () => {
  return (
   
        <nav>
            <Link to='/' className='title'>Website</Link>
            <ul>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                <NavLink to='/services'>Services</NavLink>
                </li>
                <li>
                <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
   
  )
}
