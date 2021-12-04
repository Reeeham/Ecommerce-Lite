import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCart } from '../../containers/Home/services/cartService';
import './index.scss'
export const PreviewCart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        setCartProducts(getCart());
    }, [])
    return (<div className="preview-cart">
        <div className="preview-cart-list">
            {cartProducts.map((p, i) => {
                return (<div className="preview-cart-item">
                    <div className="preview-cart-item-img">
                        <img src={p.image} alt="Cart item img" />
                    </div>
                    <div className="preview-cart-item-content">
                        <div className="preview-cart-item-brand">{p.brand}</div>
                        <div className="preview-cart-item-name">{p.brand} | {p.title}</div>
                        <div className="preview-cart-item-price">{p.price}EGP</div>
                    </div>
                </div>)
            })
            }
        </div>
        {cartProducts.length >= 1 && <div className="preview-cart-item-actions">
            <div className="preview-cart-item-checkout">
                <button>
                    <Link className="btn-checkout">checkout</Link>
                </button>
            </div>
            <div className="preview-cart-item-view-cart">
                <button><Link className="btn-view-cart" to="/cart">view cart</Link></button>

            </div>
        </div>}
        {
            cartProducts.length === 0  && <div className="empty-cart"> Your cart is empty</div>
        }

    </div>)
}