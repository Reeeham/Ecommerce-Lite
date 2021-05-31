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
    const [productSelectedCategory, setProductSelectedCategory] = useState(' All Products');
    const [selectedAccount, setSelectedAccount] = useState('My Account');
    const [selectedCountryImgPath, setSelectedCountryImgPath] = useState('./../../images/countries-icons/united-states.svg');
    const toggleCategoriesDropDownBtn = () => setCategoriesDropdownOpen(!categoriesDropdownOpen);
    const toggleAccountDropDownBtn = () => setAccountDropdownOpen(!accountDropdownOpen);
    const toggleCountriesDropDownBtn = () => setCountriesDropdownOpen(!countriesDropdownOpen);
    const handleProductsChange = (name) => { setProductSelectedCategory(name) }
    const handleAccountChange = (name) => { setSelectedAccount(name) }
    const handleCountryChange = (name) => { setSelectedCountryImgPath(name) }

    return (
        <nav className="top-header">
            <ul className="firstHeader">
                <li>
                    <FontAwesomeIcon icon={faBox} style={{ marginRight: "5px" }} /> Free
          shipping on orders over $100
        </li>
                <li>
                    <button>
                        Don't miss out. <span>Subscribe Now</span>
                    </button>
                </li>
            </ul>
            <ul className="secondHeader">
                <li className="logoWord">
                    <Link to="/">
                        store<span>logo</span>
                    </Link>
                </li>
                <li className="search">
                    <div class="dropdown">
                        <button class="dropbtn" onClick={toggleCategoriesDropDownBtn}>
                            {productSelectedCategory}
                            <FontAwesomeIcon
                                icon={faCaretDown}
                                style={{ marginLeft: "5px" }}
                            />
                        </button>
                        {categoriesDropdownOpen ? (
                            <div class="dropdown-content" onBlur={toggleCategoriesDropDownBtn}>
                                <a href="#" onClick={() => handleProductsChange('Link 1')}>Link 1</a>
                                <a href="#" onClick={() => handleProductsChange('Link 2')}>Link 2</a>
                                <a href="#" onClick={() => handleProductsChange('Link 3')}>Link 3</a>
                            </div>
                        ) : null}
                    </div>
                    <div className="searchInput">
                        <input type="search" placeholder="Enter Keywords" />
                        <span className="searchIcon">
                            <FontAwesomeIcon icon={faSearch} style={{ marginLeft: "5px" }} />{" "}
                        </span>
                    </div>
                </li>
                <li className="user">
                    <ul className="userSelections">
                        <li>
                            <div class="dropdown">
                                <span className="cursor" onClick={toggleAccountDropDownBtn}>{selectedAccount}</span>
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    style={{ marginLeft: "5px" }}
                                    onClick={toggleAccountDropDownBtn}
                                    className="cursor"

                                />

                                {accountDropdownOpen ? (
                                    <div class="dropdown-content" onBlur={toggleAccountDropDownBtn}>
                                        <a href="#" onClick={() => handleAccountChange('Link 1')}>Link 1</a>
                                        <a href="#" onClick={() => handleAccountChange('Link 2')}>Link 2</a>
                                        <a href="#" onClick={() => handleAccountChange('Link 3')}>Link 3</a>
                                    </div>
                                ) : null}
                            </div>
                        </li>
                        <li>

                            <div class="dropdown">
                                <img
                                    className="countryImg cursor"
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

                                {countriesDropdownOpen ? (
                                    <div class="dropdown-content" onBlur={toggleCountriesDropDownBtn}>
                                        <a href="#" onClick={() => handleCountryChange('./../../images/countries-icons/egypt.svg')}>
                                            <img
                                                className="countryImg"
                                                alt="united states"
                                                src="./../../images/countries-icons/egypt.svg"
                                            /></a>
                                        <a href="#" onClick={() => handleCountryChange('./../../images/countries-icons/united-kingdom.svg')}>
                                            <img
                                                className="countryImg"
                                                alt="united states"
                                                src="./../../images/countries-icons/united-kingdom.svg"
                                            /></a>
                                        <a href="#" onClick={() => handleCountryChange('./../../images/countries-icons/united-states.svg')}>
                                            <img
                                                className="countryImg"
                                                alt="united states"
                                                src="./../../images/countries-icons/united-states.svg"
                                            /></a>
                                    </div>
                                ) : null}
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                style={{ marginLeft: "5px" }}
                            />
              Cart
            </li>
                        <li className="cartNum">0</li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
