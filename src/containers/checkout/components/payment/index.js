import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
    faCreditCard, faLock, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

export const Payment = () => {

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("online");
    const handlePaymentMethodChange = (evt) => { 
        const value = evt.target.value;
        setSelectedPaymentMethod(value);
    }
    return (<>
            <ul className="options-list">
                <li className="option-card">
                    <div className="option-header">
                        <div className="radio-button">
                            <input type="radio" name="payment-method" value="online" checked={selectedPaymentMethod === "online"} onChange={handlePaymentMethodChange} className="radio-button" />Online payment
                        </div>
                        <div className="payment-icons">
                            <FontAwesomeIcon icon={faCreditCard} color="blue" />
                            <FontAwesomeIcon icon={faCreditCard} color="blue" />
                            <FontAwesomeIcon icon={faCreditCard} color="blue" />
                            <FontAwesomeIcon icon={faCreditCard} color="blue" />
                        </div>
                    </div> 
                    {selectedPaymentMethod === "online" && <form className="option-form">
                    <div className="inputs-row">
                        <div className="input">
                            <label className='form-label'>Credit Card Number</label>
                            <div className="payment-form-input form-input">
                            <FontAwesomeIcon icon={faCreditCard} color="grey" />
                                <input />
                                <FontAwesomeIcon icon={faLock} color="grey" />
                            </div>
                        </div>
                    </div>
                        <div className="inputs-row">
                            <div className="input">
                                <label className='form-label'>Expiration</label>
                                <div className="payment-form-input form-input">
                                <input placeholder="MM / YY" />
                                </div>
                            </div>
                            <div className="input">
                                <label className='form-label'>CVV <FontAwesomeIcon icon={faQuestionCircle} /></label>
                                <div className="payment-form-input form-input">
                                    <input />
                                    <FontAwesomeIcon icon={faLock} color="grey" />

                                </div>
                            </div>
                        </div>

                    </form>}
                  
                </li>
                <li className="option-card">
                    <div className="option-header">
                        <div className="radio-button">
                            <input type="radio" name="payment-method" value="valu" checked={selectedPaymentMethod === "valu"} onChange={handlePaymentMethodChange} className="radio-button" />Pay monthly by valU (above 500LE)
                        </div>
                    </div>
                </li>
                <li className="option-card">
                    <div className="option-header">
                        <div className="radio-button">
                            <input type="radio" name="payment-method" value="cash"  checked={selectedPaymentMethod === "cash"} onChange={handlePaymentMethodChange} className="radio-button" />Cash on Delivery
                        </div>
                    </div>
                </li>
            </ul>

    </>)
}