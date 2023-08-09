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
    onAddToWishlist
}) => {
    const [selectedColor, setSelectedColor] = useState(productColor && productColor.length > 0 ? productColor[0] : null);
    const [selectedSize, setSelectedSize] = useState(productSize && productSize.length > 0 ? productSize[0] : null);
    const [quantity, setQuantity] = useState(1);
    return(
        <div className="product">
            <img src={productImage} alt={productName} />
            <h2>{productName}</h2>
            <p>{productDescription}</p>
            <p>{productPrice ? "$"+productPrice.toFixed(2) : 'N/A'}</p>
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
            <div>
                <label>Quantity: </label>
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <div>
                <label>Size: </label>
                <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                    {productSize.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={() => onAddToCart({productName, productPrice, quantity, selectedColor, selectedSize})}>
                Add to Cart</button>
            <button onClick={() => onAddToWishlist({productName, productPrice, quantity, selectedColor, selectedSize})}>
                Add to Wishlist</button>
        </div>
    )
}

export default Product

Product.defaultProps = {
    productImage: "https://via.placeholder.com/150",
    productName: "Product Name",
    productDescription: "Product Description",
    productColor: ["Black", "Blue", "Gray", "Green", "Red", "White"],
    productSize: ["XS", "S", "M", "L", "XL", "XXL"],
    productQuantity: 1,
    productPrice: 19.99
}