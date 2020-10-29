import Welcome from './components/Welcome';
import Navbar from './components/Navbar.js'
import './style/main.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// export default function App() {
  export const App = () => {
    return (
      <div class ='App'>
    <Router>
    <Navbar />
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  </div>
);
}
export default App;

function Home() {
return <h2>Home</h2>;
}

function About() {
return <h2>About</h2>;
}

function Users() {
return <h2>Users</h2>;
}



