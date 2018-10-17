import React, { Component } from 'react';
import './App.scss';
import MainNav from '../main-nav/MainNav';
const AppContext = React.createContext({});
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;

class App extends Component {
  render() {
    console.log(AppContext);
    return (
      <div>
        <MainNav />
        <div>
          <div>
            <span>Group Brands: </span>
            <ul id="">
              <li>Trulia</li>
              <li>Street Easy</li>
              <li>HotPads</li>
              <li>Naked Apartments</li>
              <li>RealEstate.com</li>
              <li>Out East</li>
            </ul>
          </div>
          <ul id="">
            <li>ABOUT</li>
            <li>ZESTIMATES</li>
            <li>RESEARCH</li>
            <li>CAREERS</li>
            <li>HELP</li>
            <li>ADVERTISE</li>
            <li>TERMS OF USE & PRIVACY</li>
            <li>AD CHOICE</li>
            <li>COOKIE PREFERENCES</li>
            <li>BLOG</li>
            <li>DATA SCIENCE</li>
            <li>MOBILE APPS</li>
          </ul>
          <hr />
          <ul id="">
            <li>ABOUT</li>
            <li>ZESTIMATES</li>
            <li>Follow us</li>
            <li>facebook</li>
            <li>twitter</li>
            <li>googs</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
