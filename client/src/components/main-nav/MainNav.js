import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './Main-Nav.css';
import Home from '../home/Home';
import Buy from '../buy/Buy';
import Rent from '../rent/Rent';

const MainNav = () => (
  <Router>
    <div className="">
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">RE Genie</NavLink>
        </li>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/buy" activeClassName="active">Buy</NavLink>
        </li>
        <li>
          <NavLink to="/rent" activeClassName="active">Rent</NavLink>
        </li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/buy" component={Buy} />
      <Route path="/rent" component={Rent} />
    </div>
  </Router>
);

export default MainNav;
