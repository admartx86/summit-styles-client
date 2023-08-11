import React from 'react';

const FooterLinks = () => {
    return(
        <section className='footer-links'>
            <h3>How can we help you?</h3>
            <div>
                <a href="#" onClick={(e) => e.preventDefault()}>Shipping</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Track Order</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Returns & Exchanges</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Something Else (Help)</a>
                <a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a>
            </div>
        </section>
    )
}

export default FooterLinks;