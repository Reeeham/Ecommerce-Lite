import React from 'react'
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

                    </div>
                </div>
                <div className="title-and-desc">
                    <div className="title"></div>
                    <div className="reviews"></div>
                    <div className="price"></div>
                    <div className="description"></div>
                    <div className="color"></div>
                    <div className="add-to-cart"></div>
                    <div className="nav-tabs"></div>
                </div>

            </div>
        </div>

    </div>)
}

export default ProductDetails;