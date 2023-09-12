import React from "react";
import ProductList from "./ProductList";

const Womens = () => {
    return(
        <div>
            <h1 className='shop-title'>Women's</h1>
            <ProductList category="womens" />
        </div>
    );
}

export default Womens;