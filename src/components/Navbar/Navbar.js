import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import App from '../../App';

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
                    <Route>
                        <Link to="/home">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/signup" className="signup-text">SIGN UP</Link>
                        {/* <a href="/" className="signup-text">SIGN UP</a> */}
                    </Route>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;