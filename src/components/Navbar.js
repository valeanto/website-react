import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../images/netguru-logo.png";

export default function Navbar() {
  return (
    <nav className="horizontal-navbar">
      <div className="left">
        <Link to="/">
          <div className="image-container-small">
            <img src={logoImage} alt="" className="image"></img>
          </div>
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
