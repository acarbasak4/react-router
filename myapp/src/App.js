import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Colors } from "./components/Colors";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/"  exact activeStyle={{fontWeight:"bold", color:"yellow"}} >Home</NavLink>
          <NavLink to="/about" exact activeStyle={{fontWeight:"bold", color:"green"}}>About</NavLink>
          <NavLink to="/colors" exact activeStyle={{fontWeight:"bold", color:"red"}}>Colors</NavLink>
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
