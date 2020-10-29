import React from "react";
import useState from "./Hooks/useState";
import useRef from "./Hooks/useRef";

import { Link } from "react-router-dom";
export default function LearningReact() {
  return (
    <ul>
      <li>
      <Link to="/usestate" >use State</Link>
      </li>
      <li>
      <Link to="/useRef" component={useRef} />
      </li>
    </ul>
  );
}
