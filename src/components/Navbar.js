import React from 'react'
import {
    NavLink
  } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="navbar navbar-default horizontal-navbar">
        
        <div className="links-navbar-div">
          <div className="btn-nav">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="/">Add Job</NavLink>
              </li>
              <li>
                <NavLink to="/#search">Search</NavLink>
              </li>
              <li>
                <a href="/#how-it-works">How It Works</a>
              </li>
              <li>
                <NavLink to="/sign-in">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/sing-up">Sign Up</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
