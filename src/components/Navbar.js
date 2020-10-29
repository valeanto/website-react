import React from 'react'
import { Link,
    NavLink
  } from "react-router-dom";
import useState from './learning react/Hooks/useState'
export default function Navbar() {
    return (
        <nav className="navbar horizontal-navbar">
        <div className="links-navbar-div">
          <div className="navbar-right">
            <ul>
              <li>
                <NavLink to="/">Play a Game</NavLink>
              </li>
              <li>
                <NavLink to="/#search">Work</NavLink>
              </li>
              <li>
              <Link to="/learningreact">LearningReact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
