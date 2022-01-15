import { faAngleDown, faAngleUp,faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCart, removeProduct, updateProduct } from '../../services/cartService';
import { Breadcrumbs } from '../breadcrumbs';
import './index.scss'

export const Cart = () => {
    const [cartProducts, setCartProducts] = useState(getCart());
    const [subTotal, setSubTotal] = useState(0);
    const [shipping] = useState(20);
    const [feesAndVat] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const deleteItem = (productId) => { 
        removeProduct(productId);
        setCartProducts(getCart())
    }
    useEffect(() => { 
        let productsTotalPrice = cartProducts.map(p => p.quantity * p.price)
        let subTotal = Math.round(productsTotalPrice.reduce((prev, curr) => prev + curr, 0));
        let grandTotal = shipping + subTotal;
        setSubTotal(subTotal);
        setGrandTotal(grandTotal)
    },[cartProducts,setCartProducts, shipping])
    return (<div>
        <div className="cart-breadcrumbs">
            <Breadcrumbs navList={['Home', 'Your Cart']} />
        </div>
        <h1>Your Cart {cartProducts.length === 1 ? '1 item' : cartProducts.length >= 1 ? `(${cartProducts.length} items)` : 'is Empty'}</h1>
        {cartProducts.length >=1 && 
        
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
                            <button onClick={(e) => { updateProduct(p.id, p.quantity+1); setCartProducts(getCart())}}><FontAwesomeIcon icon={faAngleUp}/></button>
                            <input defaultValue={p.quantity} onKeyUp={(e) => { e.preventDefault(); updateProduct(p.id, e.target.value); setCartProducts(getCart()) }}></input>
                            <button onClick={(e) => { updateProduct(p.id, p.quantity-1); setCartProducts(getCart())}}><FontAwesomeIcon icon={faAngleDown}/></button>
                            </div>
                        </td>
                        <td className="cart-item-total">1000<span className="cart-item-delete" onClick={(e) =>  { e.preventDefault(); deleteItem(p.id)}}><FontAwesomeIcon icon={faTimes}/></span></td>
                    </tr>)

                })}
                <tr className="cart-totals">
                    <td className="cart-total">
                        <div className="cart-total-label">Subtotal:</div>
                        <div className="cart-total-value">{subTotal}EGP</div>
                    </td>
                    <td className="cart-total">
                        <div className="cart-total-label">Shipping:</div>
                        <div className="cart-total-value">{shipping}EGP</div>
                    </td>
                    <td className="cart-total">
                        <div className="cart-total-label">Website Fees + VAT inluded:</div>
                        <div className="cart-total-value">{feesAndVat}EGP</div>
                    </td>
                    <td className="cart-total cart-total-grand">
                        <div className="cart-total-label">Grand total</div>
                        <div className="cart-total-value">{grandTotal}EGP</div>
                    </td>
                    <td className="cart-action">
                        <button><Link to="/checkout">checkout</Link></button>
                    </td>
                </tr>
            </tbody>

        </table>
        }

    </div>)
}