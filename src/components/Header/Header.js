import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCaretDown, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

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
            <button
              id="productsBtn"
              type="button"
              onClick={toggle}
              onFocus={toggle}
            >
              All Products
              <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: "5px" }} /> 
            </button>
            {/* {dropdownOpen ? (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">HTML</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
              </ul>
            ) : null} */}
          </div>
          <div className="searchInput">
          <input type="search" placeholder="Enter Keywords"/>
          <span className="searchIcon"><FontAwesomeIcon icon={faSearch} style={{ marginLeft: "5px" }} /> </span>
          </div>
        </li>
        <li className="user">
          <ul className="userSelections">
              <li> Account
              <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: "5px" }} /> </li>
              <li>
              <img className="countryImg" alt="united states" src="./../../images/countries-icons/united-states.svg" />
              <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: "5px" }} /> 
              </li>
              <li>
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginLeft: "5px" }} /> Cart
              </li>
              <li className="cartNum">
                  0
              </li>
          </ul>
        </li>
      </ul>
     
    </nav>
  );
}

export default Header;
