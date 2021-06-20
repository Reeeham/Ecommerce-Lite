
import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import PropTypes from 'prop-types'
import Promotion from '../components/promotion-card'

const PromotionsList = (props) => {
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
                <div className="promotions-body">
                    {promotions.map((p) => {
                        return (<Promotion promotion={p} />)
                    })}
                </div>
            </div>
        </>
    )
}

export default PromotionsList

PromotionsList.prototypes = {
    promotions: PropTypes.shape[{
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        desc: PropTypes.string,
        icon: PropTypes.string,
        type: PropTypes.string,
    }]
}