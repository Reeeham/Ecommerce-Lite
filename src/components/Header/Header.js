import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.scss';
import Navbar from '../Navbar';
import { faBox } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
   

    return (
        <>
            <nav className="main-container first-header">
                <ul className="container">
                    <li className="free-shipping-text">
                        <FontAwesomeIcon icon={faBox} style={{ marginRight: "5px" }} /> Free shipping on orders over $100
                    </li>
                    <li>
                        <button className="subscribe-btn">
                            Don't miss out. <span className="subscribe-text">Subscribe Now</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <Navbar />
        </>

    );
}

export default Header;
