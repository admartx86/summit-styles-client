import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../img/b.png';

const HomeSection3 = () => {
    return(
        <section className='Section3' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <p> Fall Sale <br></br> Save up to 30% </p> <Link to="/shop/sale">
                 <button>View Sale</button>
                </Link>
        </section>
    )
};

export default HomeSection3;