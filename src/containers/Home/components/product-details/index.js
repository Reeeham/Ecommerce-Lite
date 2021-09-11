import React from 'react'
import './index.scss'

export const ProductDetails = () => {
    return (<div className="container">

        <div className="product-details">
            <div className="bread-crumbs">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Clothing</li>
                    <li>Hoodies</li>
                    <li>Happy Ninja</li>
                </ul>
            </div>
            <div className="photo-gallery"></div>
            <div className="title"></div>
            <div className="reviews"></div>
            <div className="price"></div>
            <div className="description"></div>
            <div className="color"></div>
            <div className="add-to-cart"></div>
            <div className="nav-tabs"></div>
        </div>

    </div>)
}

export default ProductDetails;