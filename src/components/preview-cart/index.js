import { Link } from 'react-router-dom';

export const PreviewCart = () => { 
    return (<div className="preview-cart">
    <div className="preview-cart-list">
        <div className="preview-cart-item">
            <div className="preview-cart-item-img">
                <img src="./../../images/cart-item-img.jpeg" alt="Cart item img" />
            </div>
            <div className="preview-cart-item-content">
                <div className="preview-cart-item-brand">Defacto</div>
                <div className="preview-cart-item-name">Defacto | Pyjama</div>
                <div className="preview-cart-item-price">129EGP</div>
            </div>
        </div>
        <div className="preview-cart-item">
            <div className="preview-cart-item-img">
                <img src="./../../images/cart-item-img.jpeg" alt="Cart item img" />
            </div>
            <div className="preview-cart-item-content">
                <div className="preview-cart-item-brand">Defacto</div>
                <div className="preview-cart-item-name">Defacto | Pyjama</div>
                <div className="preview-cart-item-price">129EGP</div>
            </div>
        </div>
        <div className="preview-cart-item">
            <div className="preview-cart-item-img">
                <img src="./../../images/cart-item-img.jpeg" alt="Cart item img" />
            </div>
            <div className="preview-cart-item-content">
                <div className="preview-cart-item-brand">Defacto</div>
                <div className="preview-cart-item-name">Defacto | Pyjama</div>
                <div className="preview-cart-item-price">129EGP</div>
            </div>
        </div>
        <div className="preview-cart-item">
            <div className="preview-cart-item-img">
                <img src="./../../images/cart-item-img.jpeg" alt="Cart item img" />
            </div>
            <div className="preview-cart-item-content">
                <div className="preview-cart-item-brand">Defacto</div>
                <div className="preview-cart-item-name">Defacto | Pyjama</div>
                <div className="preview-cart-item-price">129EGP</div>
            </div>
        </div>
    </div>

    <div className="preview-cart-item-actions">
        <div className="preview-cart-item-checkout">
            <button>
                <Link className="btn-checkout">checkout</Link>
            </button>
        </div>
        <div className="preview-cart-item-view-cart">
            <button><Link className="btn-view-cart">view cart</Link></button>
            
        </div>
    </div>
</div>)
} 