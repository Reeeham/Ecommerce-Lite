import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'


export const Checkout = () => {
    return (<>
        <nav className="main-container checkout-navbar">
            <ul className="container">
                <li className="logo-word"><Link to="/" className="cursor">store<span>logo</span></Link></li>
            </ul>
        </nav>
        <div className="container">
                <ul className="stepper">
                    <li className="step">
                        <div className="step-header">
                            <div className="step-number">1</div>
                            <div className="step-title">Customer</div>
                        </div>
                        <div className="step-content"></div>
                    </li>
                </ul>
            <div className="order-summary">

            </div>
        </div>

    </>);
}

export default Checkout;