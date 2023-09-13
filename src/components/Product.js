import React, { useState } from 'react';

const Product = ({
    productImage,
    productCategory,
    productName,
    productDescription,
    productPrice,
    productColor,
    productSize,
    productQuantity,
    onAddToCart,
    onAddToWishlist,
    renderAddToCart,
    renderAddToWishlist,
    renderColor,
    renderSize,
    renderQuantity,
    renderDescription
}) => {
    const [selectedColor, setSelectedColor] = useState(productColor && productColor.length > 0 ? productColor[0] : null);
    const [selectedSize, setSelectedSize] = useState(productSize && productSize.length > 0 ? productSize[0] : null);
    const [quantity, setQuantity] = useState(1);
    return(
        <div className="product">
            <img src={productImage} alt={productName} />
            <div className="product-details">
                <h2>{productName}</h2>
                {renderDescription ? (
                <p>{productDescription}</p>
                ) : null}
                <p>{productPrice ? "$"+productPrice.toFixed(2) : 'N/A'}</p>
                {renderColor ? (    
                <div>
                    <label>Color: </label>
                    <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                        {productColor.map((color) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </select>
                </div>
                ) : null}
                {renderQuantity ? (
                <div>
                    <label>Quantity: </label>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                ) : null}   
                <div>
                    {renderSize ? (
                    <>
                    <label>Size: </label>
                    <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                        {productSize.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    </>
                    ) : null}
                </div>
            
            {renderAddToCart ? (
            <button onClick={() => onAddToCart({productName, productPrice, quantity, selectedColor, selectedSize})}>
                Add to Cart</button>
            ) : null}
            {renderAddToWishlist ? (
            <button onClick={() => onAddToWishlist({productName, productPrice, quantity, selectedColor, selectedSize})}>
                Add to Wishlist</button>
            ) : null}    
            </div>
        </div>
    )
}

export default Product

Product.defaultProps = {
    productImage: "https://via.placeholder.com/150",
    productName: "Default Product Name",
    productDescription: "Default Product Description",
    productColor: ["Black", "Blue", "Gray", "Green", "Red", "White"],
    productSize: ["XS", "S", "M", "L", "XL", "XXL"],
    productQuantity: 1,
    productPrice: 36.12
}