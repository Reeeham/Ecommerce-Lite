import React from 'react';
import { Link } from 'react-router-dom';
import { CreateAccount } from '../../components/create-account';
import { Login } from '../../components/login';
import { Payment } from './components/payment';
import { ShippingAddress } from './components/shipping-address';
import './index.scss'


export const Checkout = () => {
    return (<>
        <nav className="main-container checkout-navbar">
            <ul className="container">
                <li className="logo-word"><Link to="/" className="cursor">store<span>logo</span></Link></li>
            </ul>
        </nav>
        <div className="container stepper-container">
            <ul className="stepper">
                <li className="step">
                    <div className="step-header">
                        <div className="step-number">1</div>
                        <div className="step-title">Customer</div>
                    </div>
                    <div className="step-content">
                        {/* <Login /> */}
                        <CreateAccount />
                    </div>
                </li>
                <li className="step">
                    <div className="step-header">
                        <div className="step-number">2</div>
                        <div className="step-title">Shipping</div>
                    </div>
                    <div className="step-content">
                        <ShippingAddress />
                    </div>
                </li>
                <li className="step">
                    <div className="step-header">
                        <div className="step-number">3</div>
                        <div className="step-title">Billing</div>
                    </div>
                    <div className="step-content"></div>
                </li>
                <li className="step">
                    <div className="step-header">
                        <div className="step-number">4</div>
                        <div className="step-title">Payment</div>
                    </div>
                    <div className="step-content">
                        <Payment />
                    </div>
                </li>
            </ul>
            <div className="order-summary">
                    <div className="order-summary-header">
                        <h3>Order Summary</h3>
                        <Link to="/cart" className='link-color'>Edit Cart</Link>
                    </div>
                    <div className="product-list">
                    <h3 className="product-list-count">3 Items</h3>

                        <div className="product-list-item">
                            <div className="product-item">
                                <div className="product-body">
                                    <div className="product-image">
                                    <img src="./../../images/promotions/beautyProduct.JPG" alt="" />
                                    </div>
                                    <div className="product-description">
                                        <p className="product-name">1 x SHEIN | Tie Side Bikini Skirt - W2011042440_36_s</p>
                                        <p className="product-color">Color Black</p>
                                        <p className="product-size">Size L</p>
                                    </div>
                                </div>
                                <div className="product-price">209EGP</div>

                            </div>
                        </div>
                    </div>
                    <div className="order-summary-total">
                                <div className="price-item">
                                    <div className="price-item-label">Subtotal</div>
                                    <div className="price-item-value">209EGP</div>
                                </div>
                                <div className="price-item">
                                    <div className="price-item-label">Shipping</div>
                                    <div className="price-item-value">Free</div>
                                </div>
                                <div className="price-item">
                                    <div className="price-item-label">Fees + VAT Included</div>
                                    <div className="price-item-value">26EGP</div>
                                </div>
                            </div>
                    <div className="order-summary-footer">
                        <div className="price-item">
                            <div className="price-item-label">Total (EGP)</div>
                            <div className="price-item-value">209EGP</div>
                        </div>
                    </div>
            </div>
        </div>

    </>);
}

export default Checkout;