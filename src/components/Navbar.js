import React from 'react'
import { Link,
    NavLink
  } from "react-router-dom";
import useState from './learning react/Hooks/useStateTest'
export default function Navbar() {
    return (
        <nav className="navbar horizontal-navbar">
        <div className="links-navbar-div">
          <div className="navbar-right">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
              <Link to="/learningreact">LearningReact</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
              <li>
              <Link to="/read">Read</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
