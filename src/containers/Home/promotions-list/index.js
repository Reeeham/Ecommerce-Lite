import { faBiking, faSprayCan, faTshirt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function PromotionsList() {
    return (
        <>
            <div className="container">
                <div className="promotions-header">
                    <h1 className="promotions-title">Active Promotions</h1>
                    <Link to="" className="all-promotions-link">View All Promotions</Link>
                </div>
            </div>
            <div className="container m-5">
                <div className="promotions-body ">
                    <div className="promotion">
                        <div className="promotion-top">
                            <img alt="sweater" src="./../../images/promotions/sweater.jpg" />
                        </div>
                        <div className="promotion-bottom sweaters">
                            <div className="promotion-icon">
                                <FontAwesomeIcon icon={faTshirt} />
                            </div>
                            <div className="promotion-desc">up to 20% off on beauty products</div>
                            <div className="promotion-btn">
                                <button><Link to="" >Browse Products</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="promotion beauty-products">
                        <div className="promotion-top beauty">
                            <div className="promotion-icon">
                                <FontAwesomeIcon icon={faSprayCan} />
                            </div>
                            <div className="promotion-desc">up to 20% off on beauty products</div>
                            <div className="promotion-btn">
                                <button><Link to="" >Browse Products</Link></button>
                            </div>
                        </div>
                        <div className="promotion-bottom">
                            <img alt="bike" src="./../../images/promotions/beautyProduct.jpg" />
                        </div>
                    </div>
                    <div className="promotion">
                        <div className="promotion-top">
                            <img alt="bike" src="./../../images/promotions/bike.jpg" />
                        </div>
                        <div className="promotion-bottom bikes">
                            <div className="promotion-icon">
                                <FontAwesomeIcon icon={faBiking} />
                            </div>
                            <div className="promotion-desc">up to 20% off on beauty products</div>
                            <div className="promotion-btn">
                                <button><Link to="" >Browse Products</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PromotionsList
