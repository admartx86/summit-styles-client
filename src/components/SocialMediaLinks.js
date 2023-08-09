import React from "react";

const SocialMediaLinks = () => {
    return(
        <div>
        <h3>Follow us</h3>
        <div className="social-media-links">
            <a href="#" onClick={(e) => e.preventDefault()}>Twitter</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Facebook</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Instagram</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Pinterest</a>
        </div>
        </div>
    )
}

export default SocialMediaLinks;