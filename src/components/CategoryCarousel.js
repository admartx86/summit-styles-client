import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import womensImage from '../img/womens.jpg';
import mensImage from '../img/mens.jpg';
import kidsImage from '../img/kids.jpg';
import bagsGearImage from '../img/bagsgear.jpg';
import newFeaturedImage from '../img/newfeatured.jpg';
import saleImage from '../img/sale.jpg';

const categories = [
    "Men's",
    "Kids'",
    "Bags & Gear",
    "New & Featured",
    "Sale",
    "Women's",
];

const categoryImages = {
    "Sale": saleImage,
    "Women's": womensImage,
    "Men's": mensImage,
    "Kids'": kidsImage,
    "Bags & Gear": bagsGearImage,
    "New & Featured": newFeaturedImage,
};

const categoryRoutes = {
    "Sale": "/shop/sale",
    "Women's": "/shop/womens",
    "Men's": "/shop/mens",
    "Kids'": "/shop/kids",
    "Bags & Gear": "/shop/bags-gear",
    "New & Featured": "/shop/new-featured",
};

const CategoryCarousel = () => {
    const navigate = useNavigate();

    const handleItemClick = (index) => {
        const category = categories[index];
        navigate(categoryRoutes[category]);
    };

    return (
        <div className="category-carousel">
         <p>Shop by Category</p>
        <Carousel className="carousel"
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            showIndicators={false}
            showArrows={true}
            autoPlay={true}
            interval={3000}
            transitionTime={2000}
            centerMode={true}
            centerSlidePercentage={33.33}
            swipeable={true}
            onClickItem={(index, item) => handleItemClick(index)}
        >
            {categories.map((category, index) => (
                <Link key={index} to={categoryRoutes[category]} className="carousel-item">
                <div className="image-wrapper">    
                    
                    <img src={categoryImages[category]} alt={category} />

                    <h3 className="category">{category}</h3>
                </div>
                </Link>
            ))}
        </Carousel>
        </div>
    );
};

export default CategoryCarousel;