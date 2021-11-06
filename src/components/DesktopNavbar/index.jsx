import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faSearch,
    faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const DesktopNavbar = () => {

    const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
    const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);
    // const [showNav, setShowNav] = useState(true);
    const [selectedCountryImgPath, setSelectedCountryImgPath] = useState('./../../images/countries-icons/united-states.svg');
    const toggleCategoriesDropDownBtn = () => setCategoriesDropdownOpen(!categoriesDropdownOpen);
    const toggleAccountDropDownBtn = () => setAccountDropdownOpen(!accountDropdownOpen);
    const toggleCountriesDropDownBtn = () => setCountriesDropdownOpen(!countriesDropdownOpen);
    const handleCountryChange = (name) => { setSelectedCountryImgPath(name) }

    return (<nav className="main-container second-header">
        <ul className="container">
            <li className="logo-word">store<span>logo</span></li>
            <li className="search">
                <div className="search-container">
                    <button className="drop-btn" onMouseOver={toggleCategoriesDropDownBtn} onClick={toggleCategoriesDropDownBtn}>
                        All Products
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            style={{ marginLeft: "0.7rem" }}
                        />
                    </button>
                    <input className="search-input" type="search" placeholder="Enter Keywords" />
                    <span className="search-icon">
                        <FontAwesomeIcon icon={faSearch} style={{ marginLeft: "5px" }} />{" "}
                    </span>

                    { categoriesDropdownOpen &&
                        <div onMouseLeave={toggleCategoriesDropDownBtn} className="dropdown-content products-submenu" onBlur={toggleCategoriesDropDownBtn}>
                            <div className="cat-item"><Link to="/">Dresses</Link>
                                <div className="subcat-items">
                                    <Link to="/">Tops</Link>
                                    <Link to="/">Bottoms</Link>
                                    <Link to="/">Jumpsuits</Link>
                                    <Link to="/">Activewear</Link>
                                    <Link to="/">Beahwear</Link>
                                    <Link to="/">Lingerie</Link>
                                    <Link to="/">Sleepwear</Link>
                                </div>
                            </div>
                            <div className="cat-item"><Link to="/">Shoes</Link>
                                <div className="subcat-items">
                                    <Link to="/">Sneakers &amp; Atheletic shoes </Link>
                                    <Link to="/">Boots and booties</Link>
                                    <Link to="/">Casual shoes</Link>
                                    <Link to="/">Flats</Link>
                                    <Link to="/">Heels</Link>
                                    <Link to="/">Sandals &amp; slippers</Link>
                                    <Link to="/">Home footwear</Link>
                                </div>
                            </div>
                            <div className="cat-item"><Link to="/">Bags</Link>
                                <div className="subcat-items">
                                    <Link to="/">Backpacks</Link>
                                    <Link to="/">Handbags</Link>
                                    <Link to="/">Crossbody</Link>
                                    <Link to="/">Laptop bags</Link>
                                    <Link to="/">Sports bags</Link>
                                    <Link to="/">Lunch bags</Link>
                                    <Link to="/">Baby care bags</Link>
                                    <Link to="/">Travel bags</Link>
                                </div>
                            </div>
                            <div className="cat-item"><Link to="/">Accessories</Link>
                                <div className="subcat-items">
                                    <Link to="/">Belts</Link>
                                    <Link to="/">Sunglasses &amp; eyewear</Link>
                                    <Link to="/">Watches</Link>
                                    <Link to="/">Wallets</Link>
                                    <Link to="/">Socks</Link>
                                </div>
                            </div>
                        </div>}
                </div>
            </li>
            <li>
                <div className="dropdown">
                    <span className="cursor" onMouseOver={toggleAccountDropDownBtn} onClick={toggleAccountDropDownBtn}>My Account</span>
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        style={{ marginLeft: "0.7rem" }}
                        onClick={toggleAccountDropDownBtn}
                        className="cursor"
                    />
                    {accountDropdownOpen &&
                        <div onMouseLeave={toggleAccountDropDownBtn} class="dropdown-content">
                             <Link to="/">Profile</Link>
                            <Link to="/">Orders</Link>
                            <Link to="/">Logout</Link>
                        </div>}
                </div>
            </li>

            <li className="menus">
                <div className="dropdown">
                    <img
                        className="country-img cursor"
                        alt="united states"
                        src={selectedCountryImgPath}
                        onMouseOver={toggleCountriesDropDownBtn}
                        onClick={toggleCountriesDropDownBtn}
                    />
                    <FontAwesomeIcon
                        icon={faAngleDown}
                        style={{ marginLeft: "0.5rem" }}
                        onClick={toggleCountriesDropDownBtn}
                        className="cursor"
                    />
                    {countriesDropdownOpen &&
                        <div onMouseLeave={toggleCountriesDropDownBtn} class="dropdown-content flags-dropdown-content" onBlur={toggleCountriesDropDownBtn}>
                            <Link to="/" onClick={() => handleCountryChange('./../../images/countries-icons/egypt.svg')}>
                                <img
                                    className="country-img"
                                    alt="united states"
                                    src="./../../images/countries-icons/egypt.svg"
                                /></Link>
                            <Link to="/" onClick={() => handleCountryChange('./../../images/countries-icons/united-kingdom.svg')}>
                                <img
                                    className="country-img"
                                    alt="united states"
                                    src="./../../images/countries-icons/united-kingdom.svg"
                                /></Link>
                            <Link to="/" onClick={() => handleCountryChange('./../../images/countries-icons/united-states.svg')}>
                                <img
                                    className="country-img"
                                    alt="united states"
                                    src="./../../images/countries-icons/united-states.svg"
                                /></Link>
                        </div>}
                </div>
                <div className="dropdown">
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
    </nav>);
}
export default DesktopNavbar;