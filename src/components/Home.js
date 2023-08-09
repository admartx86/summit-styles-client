import React from 'react';
import HomeSection1 from './HomeSection1';
import HomeSection3 from './HomeSection3';
import CategoryCarousel from './CategoryCarousel';

const Home = () => {
    return(
        <div>
            <HomeSection1 />
            <CategoryCarousel />
            <HomeSection3 />
        </div>
    )
}

export default Home;