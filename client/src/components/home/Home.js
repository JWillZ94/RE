import React from 'react';

import './Home.scss';

const Home = () => (
  <div>
    <div id="home-title">
      <div>
        <p>RE Genie</p>
        <button className="">Learn More</button>
      </div>
      <div>
        <p>Be ready to buy</p>
        <button>Get started</button>
      </div>
    </div>

    <div>
      <ul id="quick-links-list">
        <li>
          <p>REAL ESTATE</p>
        </li>
        <li>
          <p>RENTALS</p>
        </li>
        <li>
          <p>MORTGAGE RATES</p>
        </li>
        <li>
          <p>BROWSE HOMES</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
