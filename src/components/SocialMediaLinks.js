import React from "react";

import twitterIcon from '../img/twitter-icon-48.png';
import facebookIcon from '../img/facebook-icon-48.png';
import instagramIcon from '../img/instagram-icon-48.png';
import pinterestIcon from '../img/pinterest-icon-48.png';

const SocialMediaLinks = () => {
    return(
        <div>
        <h3>Follow us!</h3>
        <div className="social-media-links">
            <a href="#" onClick={(e) => e.preventDefault()}><img src={twitterIcon} alt="Twitter"/></a>
            <a href="#" onClick={(e) => e.preventDefault()}><img src={facebookIcon} alt="Facebook"/></a>
            <a href="#" onClick={(e) => e.preventDefault()}><img src={instagramIcon} alt="Instagram"/></a>
            <a href="#" onClick={(e) => e.preventDefault()}><img src={pinterestIcon} alt="Pinterest"/></a>
        </div>
        </div>
    )
}

export default SocialMediaLinks;