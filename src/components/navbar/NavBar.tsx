import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="alllinks">
          <Link className="nodeco" to="/">Home</Link>
          <Link className="nodeco" to="/projects">Projects</Link>
          <Link className="nodeco" to="/contact">Aboute me</Link>
        
        </div>
    </div>
  )
}

export default NavBar