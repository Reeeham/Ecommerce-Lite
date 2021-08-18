import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faBox,
    faSearch,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const MobileNavbar = () => {
    return (
        <>
            <nav className="main-container second-header">
                <ul className="container nav-list">
                    <li className="logo-word">store<span>logo</span></li>
                    <li className="search">
                        <div>
                            <input className="search-input" type="search" placeholder="Enter Keywords" />
                            <span className="search-icon">
                                <FontAwesomeIcon icon={faSearch} style={{ marginLeft: "5px" }} />{" "}
                            </span>

                        </div>
                      
                    </li>
                    
                    <li>

                    </li>

                </ul>
                <ul className="nav-list">
                <li>
                    <button className="drop-btn" >
                                All Products
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    style={{ marginLeft: "0.7rem" }}
                                />
                            </button>
                            <ul class="sub-menu">
                            <li><Link to="">Fashion</Link></li>
                            <li><Link to="">Furniture</Link></li>
                            <li><Link to="">Electronics</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default MobileNavbar;