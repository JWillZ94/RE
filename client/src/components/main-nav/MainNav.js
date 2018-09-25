import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './Main-Nav.scss';
import Home from '../home/Home';
import Buy from '../buy/Buy';
import Rent from '../rent/Rent';

const MainNav = () => (
  <Router>
    <div>
      <div id="main-nav-content">
      
        <ul id="main-nav">
          <li>
            <NavLink to="/" exact={true} activeClassName="active">RE Genie</NavLink>
          </li>
          <li>
            <NavLink to="/buy" activeClassName="active">Buy</NavLink>
          </li>
          <li>
            <NavLink to="/rent" activeClassName="active">Rent</NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="active">Sell</NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="active">Mortgages</NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="active">Agent finder</NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="active">More</NavLink>
          </li>
        </ul>

        <div>
          <span>List your rental</span>
          <span>Advertise</span>
          <span>Sign in</span>
          <span>or</span>
          <span>Join</span>
          <span>help center</span>
        </div>

      </div>

      <Route exact path="/" component={Home} />
      <Route path="/buy" component={Buy} />
      <Route path="/rent" component={Rent} />
    </div>
  </Router>
);

export default MainNav;
