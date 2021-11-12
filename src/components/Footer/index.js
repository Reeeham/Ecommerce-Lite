import React from 'react'
import './index.scss';

const Footer = () => {
    return (

        <footer className="main-container footer-container">
            <div className="container">
                <div className="footer-list-container">
                    <ul className="footer-list">
                        <li className="footer-list-item">Quick Links</li>
                        <li className="footer-list-item">Size Guide</li>
                        <li className="footer-list-item">About Us</li>
                        <li className="footer-list-item">My Account</li>
                        <li className="footer-list-item">Track Order</li>
                        <li className="footer-list-item">FAQs</li>
                    </ul>
                    <ul className="footer-list">
                        <li className="footer-list-item">Help &amp; Support</li>
                        <li className="footer-list-item">Help</li>
                        <li className="footer-list-item">Contact Us</li>
                        <li className="footer-list-item">Returns &amp; Exchanges</li>
                    </ul>
                    <ul className="footer-list">
                        <li className="footer-list-item">Our Brands</li>
                        <li className="footer-list-item">Defacto</li>
                        <li className="footer-list-item">SHEIN</li>
                        <li className="footer-list-item">H&amp;M</li>
                        <li className="footer-list-item">LcWaikkiki</li>
                        <li className="footer-list-item">Pull&amp;pear</li>
                        <li className="footer-list-item">Ravin</li>
                    </ul>
                    <ul className="footer-list">
                        <li className="footer-list-item">Subscribe to our newsletter</li>
                        <li className="footer-list-item">
                            <div className="footer-subscribtion">
                                <input type="email" placeholder="Your email address"
                                    className="subscribe-input"></input>
                                <button className="footer-subscribe-btn">SUBSCRIBE</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>

    )
}

export default Footer
