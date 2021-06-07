import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBox,
    faCaretDown,
    faSearch,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
    const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);
    const [selectedCountryImgPath, setSelectedCountryImgPath] = useState('./../../images/countries-icons/united-states.svg');
    const toggleCategoriesDropDownBtn = () => setCategoriesDropdownOpen(!categoriesDropdownOpen);
    const toggleAccountDropDownBtn = () => setAccountDropdownOpen(!accountDropdownOpen);
    const toggleCountriesDropDownBtn = () => setCountriesDropdownOpen(!countriesDropdownOpen);
    const handleCountryChange = (name) => { setSelectedCountryImgPath(name) }

    return (
        <>
            <nav className="main-container first-header">
                <ul className="container">
                    <li>
                        <FontAwesomeIcon icon={faBox} style={{ marginRight: "5px" }} /> Free shipping on orders over $100
                    </li>
                    <li>
                        <button className="subscribe-btn">
                            Don't miss out. <span className="subscribe-text">Subscribe Now</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <nav className="main-container second-header">

                <ul className="container">
                    <li className="logo-word" style={{ width: '20%' }}>store<span>logo</span></li>
                    <li className="search">
                        <div>

                            <button className="drop-btn" onClick={toggleCategoriesDropDownBtn}>
                                All Products
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    style={{ marginLeft: "5px" }}
                                />
                            </button>
                            <input className="search-input" type="search" placeholder="Enter Keywords" />
                            <span className="search-icon">
                                <FontAwesomeIcon icon={faSearch} style={{ marginLeft: "5px" }} />{" "}
                            </span>

                            {categoriesDropdownOpen &&
                                <div onMouseLeave={toggleCategoriesDropDownBtn} className="dropdown-content" onBlur={toggleCategoriesDropDownBtn}>
                                    <Link to="">Fashion</Link>
                                    <Link to="">Furniture</Link>
                                    <Link to="">Electronics</Link>
                                </div>}
                        </div>


                    </li>
                    <li> 
                    <div className="dropdown">
                        <span className="cursor" onClick={toggleAccountDropDownBtn}>My Account</span>
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            style={{ marginLeft: "5px" }}
                            onClick={toggleAccountDropDownBtn}
                            className="cursor"

                        />

                        {accountDropdownOpen &&
                            <div onMouseLeave={toggleAccountDropDownBtn} class="dropdown-content">
                                <Link to=""></Link>
                                <Link to=""></Link>
                                <Link to=""></Link>
                            </div>}
                    </div></li>
                    <li> 
                         <div className="dropdown">
                        <img
                            className="country-img cursor"
                            alt="united states"
                            src={selectedCountryImgPath}
                            onClick={toggleCountriesDropDownBtn}
                        />
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            style={{ marginLeft: "5px" }}
                            onClick={toggleCountriesDropDownBtn}
                            className="cursor"
                        />

                        {countriesDropdownOpen &&
                            <div onMouseLeave={toggleCountriesDropDownBtn} class="dropdown-content flags-dropdown-content" onBlur={toggleCountriesDropDownBtn}>
                                <Link to="" onClick={() => handleCountryChange('./../../images/countries-icons/egypt.svg')}>
                                    <img
                                        className="country-img"
                                        alt="united states"
                                        src="./../../images/countries-icons/egypt.svg"
                                    /></Link>
                                <Link to="" onClick={() => handleCountryChange('./../../images/countries-icons/united-kingdom.svg')}>
                                    <img
                                        className="country-img"
                                        alt="united states"
                                        src="./../../images/countries-icons/united-kingdom.svg"
                                    /></Link>
                                <Link to="" onClick={() => handleCountryChange('./../../images/countries-icons/united-states.svg')}>
                                    <img
                                        className="country-img"
                                        alt="united states"
                                        src="./../../images/countries-icons/united-states.svg"
                                    /></Link>
                            </div>}
                    </div>

                    </li>
                    <li><div className="dropdown">
                        <div>
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                            />
                        </div>
                        <div className="cart-text-style"> Cart 
                            <span className="cart-num">0</span>
                        </div>
                    </div>
                    </li>

                </ul>
            </nav>
          
        </>

    );
}

export default Header;
