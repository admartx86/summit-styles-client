import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate, Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import womensImage from '../img/womens.webp';
import mensImage from '../img/mens.webp';
import kidsImage from '../img/kids.webp';
import bagsGearImage from '../img/bagsgear.webp';
import newFeaturedImage from '../img/newfeatured.webp';
import saleImage from '../img/sale.webp';

type Category = "Men's" | "Kids'" | 'Bags & Gear' | 'New & Featured' | 'Sale' | "Women's";

const categories: Category[] = [
  "Men's",
  "Kids'",
  'Bags & Gear',
  'New & Featured',
  'Sale',
  "Women's"
];

const categoryImages: { [key in Category]: string } = {
  Sale: saleImage,
  "Women's": womensImage,
  "Men's": mensImage,
  "Kids'": kidsImage,
  'Bags & Gear': bagsGearImage,
  'New & Featured': newFeaturedImage
};

const categoryRoutes = {
  Sale: '/shop/sale',
  "Women's": '/shop/womens',
  "Men's": '/shop/mens',
  "Kids'": '/shop/kids',
  'Bags & Gear': '/shop/bags-gear',
  'New & Featured': '/shop/new-featured'
};

const CategoryCarousel: React.FC = () => {
  const navigate = useNavigate();

  const handleItemClick = (index: number) => {
    const category = categories[index];
    navigate(categoryRoutes[category]);
  };

  return (
    <section className="category-carousel" aria-label="Shop by Category">
      <h2>Something for everyone</h2>
      <Carousel
        className="carousel"
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
            <figure className="image-wrapper">
              <img src={categoryImages[category]} alt={category} />
              <figcaption>
                <h3 className="category">{category}</h3>
              </figcaption>
            </figure>
          </Link>
        ))}
      </Carousel>
    </section>
  );
};

export default CategoryCarousel;
