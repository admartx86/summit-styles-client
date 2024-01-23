import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../img/section-3-banner.webp';

const HomeSection3 = () => {
  return (
    <section
      className="Section3"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <p>
        {' '}
        Fall Sale <br></br> Save up to 30%{' '}
      </p>{' '}
      <Link to="/shop/sale">
        <button>View Sale</button>
      </Link>
    </section>
  );
};

export default HomeSection3;
