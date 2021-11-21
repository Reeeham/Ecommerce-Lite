import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { addToCart } from '../../services/cartService';
import { categoryList } from '../../services/categoryList';
import { Reviews } from '../reviews';
import './index.scss'

export const ProductDetails = (props) => {
    const { show, handleClose, product } = props;
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        categoryList().then(res => {
            setCategories(res.data);
        }, (err) => {
        })
    }, []);
    const categoryName = (catId) => {
        let cat = categories.find(c => c.id === catId);
        return cat ? cat.title : '';
    }
    return (<>
        {show &&
            <div id="demo-modal" className="modal">
                <div className="modal-content">
                    <div className="product-details">
                        <div className="product-details-header">
                            <div className="bread-crumbs">
                                <ul>
                                    <li>Home</li>
                                    <li>Shop</li>
                                    <li>{categoryName(product.category_id)}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="product-details-body">
                            <div className="photo-gallery">
                                <div className="first-img"><img src={product.image} alt="" /></div>
                                <div className="other-images">
                                    <img src={product.image} alt="" />
                                    <img src={product.image} alt="" />
                                    <img src={product.image} alt="" />
                                    <img src={product.image} alt="" />
                                    <img src={product.image} alt="" />

                                </div>
                            </div>
                            <div className="title-and-desc">
                                <div className="title">{product.title}</div>
                                <div className="reviews">
                                    <Reviews rate={product.rate} rateCount={product.rate_count} />
                                </div>
                                <div className="price"> {product.price}$</div>
                                <div className="description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </div>
                                <div className="color">Color
                                    <div className="color-options">
                                        <select value="red">
                                            <option>Choose Color</option>
                                        </select></div>
                                </div>
                                <div className="clear-selection">clear selection</div>
                                <div className="add-to-cart">
                                    <input value="1" className="qauntity"></input>
                                    <button className="cursor" onClick={(e) => { e.preventDefault(); addToCart(product)}}>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Link className="modal-close" onClick={handleClose}>&times;</Link>

                </div>
            </div>
        }
    </>
    )

}

export default ProductDetails;