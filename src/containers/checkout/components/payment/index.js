import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
    faCreditCard, faLock, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';

export const Payment = () => {
    return (<>
            <ul className="payment-options-list">
                <li className="payment-option-card">
                    <div className="payment-option-header">
                        <div className="payment-radio-button">
                            <input type="radio" name="payment-method" checked className="payment-radio-button" />Online payment
                        </div>
                        <div className="payment-icons">
                            <FontAwesomeIcon icon={faCreditCard} color="blue" />
                            <FontAwesomeIcon icon={faCreditCard} color="blue" />
                            <FontAwesomeIcon icon={faCreditCard} color="blue" />
                            <FontAwesomeIcon icon={faCreditCard} color="blue" />
                        </div>
                    </div>
                    <form className="payment-option-form">
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

                    </form>
                </li>
                <li className="payment-option-card">
                    <div className="payment-option-header">
                        <div className="payment-radio-button">
                            <input type="radio" name="payment-method" className="payment-radio-button" />Pay monthly by valU (above 500LE)
                        </div>
                    </div>
                </li>
                <li className="payment-option-card">
                    <div className="payment-option-header">
                        <div className="payment-radio-button">

                            <input type="radio" name="payment-method" className="payment-radio-button" />Cash on Delivery
                        </div>
                    </div>
                </li>
            </ul>

    </>)
}