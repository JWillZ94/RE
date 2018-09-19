import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './Main-Nav.css';
import Home from '../home/Home';
import Buy from '../buy/Buy';
import Rent from '../rent/Rent';

const MainNav = () => (
  <Router>
    <Navbar className="">
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/" exact={true} activeClassName="active">RE Genie</NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/buy" activeClassName="active">Buy</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/rent" activeClassName="active">Rent</NavLink>
        </NavItem>
      </Nav>

      <Route exact path="/" component={Home} />
      <Route path="/buy" component={Buy} />
      <Route path="/rent" component={Rent} />
    </Navbar>
  </Router>
);

export default MainNav;
