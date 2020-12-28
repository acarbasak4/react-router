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
  
  const colorCodes = ["548","676","495","838","498"];
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/"  exact activeStyle={{fontWeight:"bold", color:"yellow"}} >Home</NavLink>
          <NavLink to="/about" exact activeStyle={{fontWeight:"bold", color:"green"}}>About</NavLink>
          {colorCodes.map((code,index) => 
            <NavLink key={index} to={`/colors/${code}`}  activeStyle={{fontWeight:"bold", color:"red"}}>Colors</NavLink>
           )}
       </nav>

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/colors/:colorCode" component={Colors}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
