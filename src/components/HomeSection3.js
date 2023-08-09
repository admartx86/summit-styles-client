import React from "react";
import { Link } from "react-router-dom";

const HomeSection3 = () => {
    return(
        <div>
            New Arrivals for Fall 2023 
            <Link to="/shop/sale">
                <button>View Collection</button>
            </Link>
        </div>
    )
};

export default HomeSection3;