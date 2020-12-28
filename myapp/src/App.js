import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Colors } from "./components/Colors";
import {NotFound} from "./components/NotFound";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      redirect: false
    }
  }
  redirectBtn =()=>{
    this.setState({redirect: true});
  }

  render(){
  return (
    <Router>
      <div className="App">
      {this.state.redirect && <Redirect to="/there" /> }
        <nav>
        <button onClick={this.redirectBtn} >Redirect</button>
          <NavLink to="/"  exact activeStyle={{fontWeight:"bold", color:"yellow"}} >Home</NavLink>
          <NavLink to="/about" exact activeStyle={{fontWeight:"bold", color:"green"}}>About</NavLink>
          <NavLink to="/colors" activeStyle={{fontWeight:"bold", color:"red"}}>Colors</NavLink>
           
       </nav>

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about"  exact component={About}></Route>
          <Route path="/colors" exact component={Colors}></Route>
          <Route  component ={NotFound}> </Route>
        </Switch>
      </div>
    </Router>
  )};
}

export default App;
