import React from 'react';

import './Navbar.css';
// TODO: Tomorrow begin working on navbar functionality
const NavBar = () => {
    return (
        <>
        <div className="navbar-container">
            <div className="nav-bar">
                <div className="left-side">
                    <a href="/" className="company-name">
                        TRVL <i class="fab fa-typo3" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="right-side">
                    <a href="/">Home</a>
                    <a href="/">Services</a>
                    <a href="/">Products</a>
                    <a href="/" className="signup-text">SIGN UP</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;