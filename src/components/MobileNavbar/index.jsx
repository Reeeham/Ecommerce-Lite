import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faSearch,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const MobileNavbar = () => {
    const handleCountryChange = (name) => { setSelectedCountryImgPath(name) }
    const [selectedCountryImgPath, setSelectedCountryImgPath] = useState('./../../images/countries-icons/united-states.svg');

    return (
        <>
            <nav className="main-container second-header">
                <ul className="container nav-list">
                    <li className="logo-word"><Link to="/" className="cursor">store<span>logo</span></Link></li>
                    <li className="search">
                        <div>
                            <input className="search-input" type="search" placeholder="Enter Keywords" />
                            <span className="search-icon">
                                <FontAwesomeIcon icon={faSearch} style={{ marginLeft: "5px" }} />{" "}
                            </span>
                        </div>
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
                        <ul className="sub-menu">
                            <li><Link to="/">Fashion</Link></li>
                            <li><Link to="/">Furniture</Link></li>
                            <li><Link to="/">Electronics</Link></li>
                        </ul>
                    </li>
                    <li>
                        <button className="drop-btn">My Account
                            <FontAwesomeIcon
                                icon={faAngleDown}
                                style={{ marginLeft: "0.7rem" }}
                                className="cursor"
                            />
                        </button>
                        <ul className="sub-menu">
                            <li><Link to="/">Profile</Link></li>
                            <li><Link to="/">Logout</Link></li>
                            <li><Link to="/">any</Link></li>
                        </ul>
                    </li>
                    <li>
                        <button className="drop-btn">
                            <img
                                className="country-img cursor"
                                alt="united states"
                                src={selectedCountryImgPath}
                            />
                            <FontAwesomeIcon
                                icon={faAngleDown}
                                style={{ marginLeft: "0.5rem" }}
                                className="cursor"
                            />
                        </button>
                        <ul className="sub-menu">
                            <li><Link to="/" onClick={() => handleCountryChange('./../../images/countries-icons/egypt.svg')}>
                                <img
                                    className="country-img"
                                    alt="united states"
                                    src="./../../images/countries-icons/egypt.svg"
                                /></Link>
                            </li>
                            <li>
                                <Link to="/" onClick={() => handleCountryChange('./../../images/countries-icons/united-kingdom.svg')}>
                                    <img
                                        className="country-img"
                                        alt="united states"
                                        src="./../../images/countries-icons/united-kingdom.svg"
                                    /></Link>
                            </li>
                            <li>
                                <Link to="/" onClick={() => handleCountryChange('./../../images/countries-icons/united-states.svg')}>
                                    <img
                                        className="country-img"
                                        alt="united states"
                                        src="./../../images/countries-icons/united-states.svg"
                                    /></Link>
                            </li>
                           
                        </ul>
                    </li>
                    <li>
                                <button className="drop-btn">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        style={{ marginRight: "0.5rem" }}
                                    /> Cart<span className="num">0</span>

                                </button>
                            </li>

                </ul>
            </nav>
        </>
    );
}

export default MobileNavbar;