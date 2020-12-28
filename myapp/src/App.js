import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">

    <Route path ="/" component={Home}></Route>
    <Route path ="/about" component={About}></Route>
    <Route path ="/colors" component={Colors}></Route>
      
    </div>
    </Router>
  );
}

export default App;
