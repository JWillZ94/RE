import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Home from '../home/Home';
import Buy from '../buy/Buy';
import Rent from '../rent/Rent';

const MainNav = () => (
  <Router>
    <Navbar className="">
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/" className="">RE Genie</NavLink>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/buy">Buy</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/rent" className="">Rent</NavLink>
        </NavItem>
      </Nav>

      <Route exact path="/" component={Home} />
      <Route path="/buy" component={Buy} />
      <Route path="/rent" component={Rent} />
    </Navbar>
  </Router>
);

export default MainNav;
