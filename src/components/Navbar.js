import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="horizontal-navbar">
      <div className="left">
        <Link to="/">
          <img src="https://via.placeholder.com/50x50" />
        </Link>
      </div>
      <div className="right">
        <Link to="/learningreact">LearningReact</Link>
        <Link to="/contact">Contact</Link>
        <button className="button_small">Read</button>
      </div>
    </nav>
  );
}
