import { faBiking, faSprayCan, faTshirt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import PropTypes from 'prop-types'

function PromotionsList(props) {
    const { promotions } = props;
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
                            <img alt={promotions[0].name} src={promotions[0].image} />
                        </div>
                        <div className="promotion-bottom sweaters">
                            <div className="promotion-icon">
                                <FontAwesomeIcon icon={faTshirt} />
                            </div>
                            <div className="promotion-desc">{promotions[0].desc}</div>
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
                            <div className="promotion-desc">{promotions[1].desc}</div>
                            <div className="promotion-btn">
                                <button><Link to="" >Browse Products</Link></button>
                            </div>
                        </div>
                        <div className="promotion-bottom">
                            <img alt={promotions[1].name} src={promotions[1].image} />
                        </div>
                    </div>
                    <div className="promotion">
                        <div className="promotion-top">
                            <img alt={promotions[2].name} src={promotions[2].image} />
                        </div>
                        <div className="promotion-bottom bikes">
                            <div className="promotion-icon">
                                <FontAwesomeIcon icon={faBiking} />
                            </div>
                            <div className="promotion-desc">{promotions[2].desc}</div>
                            <div className="promotion-btn">
                                <button><Link to="">Browse Products</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PromotionsList

PromotionsList.prototypes = {
    promotions : PropTypes.shape[{
        id : PropTypes.number,
        name : PropTypes.string,
        image : PropTypes.string,
        desc : PropTypes.string
    }]
}