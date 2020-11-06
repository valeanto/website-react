import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar.js";
import Contact from "./components/Contact.js";
import "./style/main.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LearningReact from "./components/learning react/LearningReact";

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/learningreact">
            <LearningReact />
          </Route>
          <Route path="/contactus">
            <Contact />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
