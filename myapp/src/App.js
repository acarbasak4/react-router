import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Colors } from "./components/Colors";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav-links">
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/about"}>About</Link>
            </li>

            <li>
              <Link to={"/colors"}>Colors</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/colors" component={Colors}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
