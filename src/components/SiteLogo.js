import React from 'react';
import { Link } from 'react-router-dom';

const SiteLogo = () => {
    return(
        <Link className='site-logo' to='/'>
            <h1>🏔 Summit Styles</h1>
        </Link>
    );
}

export default SiteLogo;