import React from 'react';
import Slider from 'react-slick';

import './Home.scss';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Home = () => (
  <div>
    <div className="home-title">
      <div>
        <p>RE Genie</p>
        <button className="">Learn More</button>
      </div>
    </div>
    <ul>
      <li>
        <h2>Most expensive</h2>
        <small>The highest priced listings in Islip</small>
        <Slider {...settings}>
          <div>
            <p>first</p>
          </div>
          <div>
            <p>second</p>
          </div>
          <div>
            <p>third</p>
          </div>
        </Slider>
        <button>See more listings</button>
      </li>
      <li>
        <h2>Most expensive</h2>
        <small>The highest priced listings in Islip</small>
        <Slider {...settings}>
          <p>second</p>
        </Slider>
        <button>See more listings</button>
      </li>
      <li>
        <h2>Most expensive</h2>
        <small>The highest priced listings in Islip</small>
        <Slider {...settings}>
          <p>third</p>
        </Slider>
        <button>See more listings</button>
      </li>
    </ul>
  </div>
);

export default Home;
