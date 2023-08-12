import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../img/Section3.png';

const HomeSection3 = () => {
    return(
        <section className='Section3' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <p>New Styles for Fall 2023</p> <Link to="/shop/sale">
                 <button>View Collection</button>
                </Link>
        </section>
    )
};

export default HomeSection3;