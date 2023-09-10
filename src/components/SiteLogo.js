import React from 'react';
import { Link } from 'react-router-dom';

const SiteLogo = () => {
    return (
        <Link className='site-logo' to='/'>
            <img src='https://summit-styles.s3.us-east-2.amazonaws.com/summit-styles-logo-533-100-px.png' alt='home' />
        </Link>
    );
}

export default SiteLogo;