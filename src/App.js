import Welcome from './components/Welcome';
import Navbar from './components/Navbar.js'
import './style/main.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LearningReact from './components/learning react/LearningReact'

export const App = () => {
    return (
      <div className ='App'>
    <Router>
    <Navbar />

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route> 
        <Route path="/learningreact">
          <LearningReact />
        </Route> 
        {/* <Route path="/learningreact" component={LearningReact} /> */}
      </Switch>
      
  </Router>
  </div>
);
}
export default App;

function About() {
return <h2>About</h2>;
}

function Users() {
return <h2>Users</h2>;
}



