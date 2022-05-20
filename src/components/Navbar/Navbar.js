import React from 'react';
import { NavLink } from 'react-router-dom';

// import Services from './ServicesComponent/Services';

import './Navbar.css';

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
                    <nav>
                        <NavLink to="/" exact >Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/signin" className="signup-text">SIGN IN</NavLink>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;