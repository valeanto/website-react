import React from "react";
import useStateTest from "./Hooks/useStateTest";
import useRefTest from "./Hooks/useRefTest";

import { Link } from "react-router-dom";
export default function LearningReact() {
  return (
    <ul>
      <li>
      <Link to="/usestate" component={useStateTest}>use State</Link>
      </li>
      <li>
      <Link to="/useRef" component={useRefTest} />
      </li>
    </ul>
  );
}
