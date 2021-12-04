import { icon } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCart } from '../../services/cartService';
import { Breadcrumbs } from '../breadcrumbs';
import './index.scss'

export const Cart = () => {
    const [cartProducts, setCartProducts] = useState(getCart());

    return (<div>
        <h1>Your Cart {cartProducts.length >= 1 ? (cartProducts.length) : 'is Empty'}</h1>
        <div className="cart-breadcrumbs">
            <Breadcrumbs navList={['Home', 'Your Cart']} />
        </div>
        <table className="cart">
            <thead>
                <tr className="cart-header">
                    <th className="cart-header-item cart-header-title">Item</th>
                    <th className="cart-header-item">Price</th>
                    <th className="cart-header-item">Quantity</th>
                    <th className="cart-header-item">Total</th>
                </tr>
            </thead>
            <tbody className="cart-list">
                {cartProducts.map((p, i) => {
                    return (<tr key={i} className="cart-item">
                        <td className="cart-item-image">
                            <img src={p.image} alt="product img"></img>
                        </td>
                        <td className="cart-item-title">
                            <div className="cart-item-brand">{p.brand}</div>
                            <div className="cart-item-name">{p.title}</div>
                        </td>
                        <td className="cart-item-price">{p.price}</td>
                        <td className="cart-item-quantity">
                            <div>
                            <button><FontAwesomeIcon icon={faAngleUp}/></button>
                            <input value={p.quantity}></input>
                            <button><FontAwesomeIcon icon={faAngleDown}/></button>
                            </div>
                            </td>
                        <td className="cart-item-total">1000</td>
                    </tr>)

                })}
                <tfoot className="cart-totals">
                    <tr className="cart-total">
                        <td className="cart-total-label">Subtotal:</td>
                        <td className="cart-total-value">1,027EGP</td>
                    </tr>
                    <tr className="cart-total">
                        <td className="cart-total-label">Shipping:</td>
                        <td className="cart-total-value">1,027EGP</td>
                    </tr>
                    <tr className="cart-total">
                        <td className="cart-total-label">Website Fees + VAT inluded:</td>
                        <td className="cart-total-value">1,027EGP</td>
                    </tr>
                    <tr className="cart-total cart-total-grand">
                        <td className="cart-total-label">Grand total</td>
                        <td className="cart-total-value">1,027EGP</td>
                    </tr>
                    <tr className="cart-action">
                        <button><Link to="/">checkout</Link></button>
                    </tr>
                </tfoot>
            </tbody>

        </table>
    </div>)
}