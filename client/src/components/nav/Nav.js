import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from '../home/Home';
import Buy from '../buy/Buy';
import Rent from '../rent/Rent';

const Nav = () => (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            <span>RE Genie</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/buy" className="nav-link">Buy</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/rent" className="nav-link">Rent</NavLink>
        </li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/buy" component={Buy} />
      <Route path="/rent" component={Rent} />
    </nav>
  </Router>
);

export default Nav;
