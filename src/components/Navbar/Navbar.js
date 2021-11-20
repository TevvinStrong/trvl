import React from 'react';
import { NavLink } from 'react-router-dom';

// import App from '../../App';
// import Services from '../Navbar/ServicesComponent/Services';

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
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/signup" className="signup-text">SIGN UP</NavLink>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;