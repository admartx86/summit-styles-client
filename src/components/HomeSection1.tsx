import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../img/section-1-banner.png';

const HomeSection1 = () => {
  return (
    <section
      className="Section1"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <p>
        New Styles<br></br>for Fall 2023
      </p>
      <Link to="/shop/new-featured">
        <button>View New & Featured</button>
      </Link>
    </section>
  );
};

export default HomeSection1;
