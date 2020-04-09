import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import About from "./About";
 import FAQ from "./FAQ";
class Main extends Component {
  render() {
    return (
       <HashRouter>
        <div>
          <h1>Hooplehead Motorcycle Concepts</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Merch</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;