import React from 'react';
import {Link } from 'react-router-dom';

const HomeSection1 = () => {
    
    return(
        <div>
            Fall Sale! Save up to 30%! <Link to="/shop/new-featured">
                <button>View Collection</button>
            </Link>
        </div>
    )
}

export default HomeSection1;