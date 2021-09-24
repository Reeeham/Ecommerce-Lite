import React from 'react'
import { Reviews } from '../reviews';
import './index.scss'

export const ProductDetails = () => {
    return (<div className="container">
        <div className="product-details">
            <div className="product-details-header">
                <div className="bread-crumbs">
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Clothing</li>
                        <li>Hoodies</li>
                        <li>Happy Ninja</li>
                    </ul>
                </div>
            </div>
            <div className="product-details-body">
                <div className="photo-gallery">
                    <div className="first-img"><img src="../../../images/download.jpeg" alt="" /></div>
                    <div className="other-images">
                        <img src="../../../images/download.jpeg" alt="" />
                        <img src="../../../images/download.jpeg" alt="" />
                        <img src="../../../images/download.jpeg" alt="" />
                        <img src="../../../images/download.jpeg" alt="" />
                        <img src="../../../images/download.jpeg" alt="" />

                    </div>
                </div>
                <div className="title-and-desc">
                    <div className="title">Happy Ninja</div>
                    <div className="reviews">
                        <Reviews rate={4} rateCount={3} />
                    </div>
                    <div className="price">300$-500$</div>
                    <div className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <div className="color">Color
                        <div className="color-options">
                            <select value="red">
                                {/* onChange={(e) => { setSelectedCategoryId(e.target.value); }} */}
                                <option>Choose Color</option>
                                {/* {categories.map((cat, i) => {
                                return (<option key={i} value={cat.id}>{cat.title}</option>);
                            })} */}
                            </select></div>
                    </div>
                    <div className="clear-selection">clear selection</div>
                    <div className="add-to-cart">
                        <input value="1" className="qauntity"></input>
                        <button>Add to cart</button>
                    </div>
                    <div className="nav-tabs"></div>
                </div>

            </div>
        </div>

    </div>)
}

export default ProductDetails;