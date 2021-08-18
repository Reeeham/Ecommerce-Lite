import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faBox,
    faSearch,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Navbar from '../Navbar';

const Header = () => {
    const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);
    // const [showNav, setShowNav] = useState(true);
    const [selectedCountryImgPath, setSelectedCountryImgPath] = useState('./../../images/countries-icons/united-states.svg');
    const toggleCategoriesDropDownBtn = () => setCategoriesDropdownOpen(!categoriesDropdownOpen);
    const toggleAccountDropDownBtn = () => setAccountDropdownOpen(!accountDropdownOpen);
    const toggleCountriesDropDownBtn = () => setCountriesDropdownOpen(!countriesDropdownOpen);
    const handleCountryChange = (name) => { setSelectedCountryImgPath(name) }
    // const toggleNav = () => {
    //     setShowNav(!showNav);
    //     let firstHeader = document.querySelector('.main-container .first-header');
    //     let secondHeader = document.querySelector('.main-container .second-header');
    //     if(showNav) { 
    //         firstHeader.style.display = "flex";
    //         secondHeader.style.display = "flex";
    //     }else { 
    //         firstHeader.style.display = "none";
    //         secondHeader.style.display = "none"
    //     }
    // }
    return (
        <>
          
            {/* <Link href="#" id="toggle" onClick={toggleNav}><span></span></Link>  */}
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
