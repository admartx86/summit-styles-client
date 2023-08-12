import React from 'react';
import {Link } from 'react-router-dom';
import backgroundImage from '../img/Section1.png';

const HomeSection1 = () => {
    return(
        <section className='Section1' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <p> Summit Sale! <br></br> Save up to 30%! </p> 
            <Link to="/shop/new-featured">
                <button>View Collection</button>
            </Link>
        </section>
    )
}

export default HomeSection1;
