import React from 'react';

import './Home.scss';

const Home = () => (
  <div>
    <div id="home-title">
      <div>
        <p>RE Genie</p>
        <button className="">Learn More</button>
      </div>
    </div>
    <ul id="featured-properties">
      <li>
        <h2>Largest homes</h2>
        <small>The highest priced listings in Islip</small>
        <div>
          <div>
            <div>Largest homes</div>
          </div>
          <div>
            <div>Potential deals</div>
          </div>
          <div>
            <p>third</p>
          </div>
        </div>
        <button>See more listings</button>
      </li>
      <li>
        <h2>Potential deals</h2>
        <small>The highest priced listings in Islip</small>
        <div>
          <div>
            <p>first</p>
          </div>
          <div>
            <p>second</p>
          </div>
          <div>
            <p>third</p>
          </div>
        </div>
        <button>See more listings</button>
      </li>
      <li>
        <h2>Most recently built</h2>
        <small>The highest priced listings in Islip</small>
        <div>
          <div>
            <p>first</p>
          </div>
          <div>
            <p>second</p>
          </div>
          <div>
            <p>third</p>
          </div>
        </div>
        <button>See more listings</button>
      </li>
    </ul>
    <div>
      <ul id="quick-links-list">
        <li>
          REAL ESTATE
        </li>
        <li>
          RENTALS
        </li>
        <li>
          MORTGAGE RATES
        </li>
        <li>
          BROWSE HOMES
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
