import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate, Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const categories = [
    "Women's",
    "Men's",
    "Kids'",
    "Bags & Gear",
    "New & Featured",
    "Sale"
];

const categoryRoutes = {
    "Women's": "/shop/womens",
    "Men's": "/shop/mens",
    "Kids'": "/shop/kids",
    "Bags & Gear": "/shop/bags-gear",
    "New & Featured": "/shop/new-featured",
    "Sale": "/shop/sale"
};

const CategoryCarousel = () => {
    const navigate = useNavigate();

    const handleItemClick = (index) => {
        const category = categories[index];
        navigate(categoryRoutes[category]);
    };

    return (
        <div>
            Everything you're looking for!
        <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            showIndicators={false}
            showArrows={true}
            autoPlay={true}
            interval={3000}
            transitionTime={3000}
            centerMode={true}
            centerSlidePercentage={33.33}
            swipeable={true}
            onClickItem={(index, item) => handleItemClick(index)}
        >
            {categories.map((category, index) => (
                <Link key={index} to={categoryRoutes[category]}>
                    <img src={"https://via.placeholder.com/150"} alt={category} />
                    <h3>{category}</h3>
                </Link>
            ))}
        </Carousel>
        </div>
    );
};

export default CategoryCarousel;