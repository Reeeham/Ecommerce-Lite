import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Header.scss';
import Navbar from '../Navbar';
import DesktopNavbar from '../DesktopNavbar';
import { faBox } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);

   useEffect(()=> { 
    window.addEventListener("resize", () => setWidth(window.innerWidth));
   },[width]);

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
            {width > 812 || width > 767  ? <DesktopNavbar/> :   <Navbar /> }
         
        </>

    );
}

export default Header;
