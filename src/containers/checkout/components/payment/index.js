import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import {
    faCreditCard
} from '@fortawesome/free-solid-svg-icons';

export const Payment = () => {
    return (<>
        <ul className="payment-options-list">
            <li className="payment-option-card">
                    <input type="radio" className="payment-radio-button" />Online payment
                    <div className="payment-icons">
                        <FontAwesomeIcon icon={faCreditCard} color="blue" />
                        <FontAwesomeIcon icon={faCreditCard} color="blue" />
                    </div>
            </li>
            <li className="payment-option-card"><input type="radio" className="payment-radio-button" />Pay monthly by valU (above 500LE)</li>
            <li className="payment-option-card"><input type="radio" className="payment-radio-button" />Cash on Delivery</li>
        </ul>
    </>)
}