import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import PropTypes from 'prop-types';
import * as Icons from '@fortawesome/free-solid-svg-icons';



export const BottomPromotion = (props) => {
    const { promotion } = props;


    return (<div className="promotion top">
        <div className="promotion-top">
            <div className="promotion-icon">
                <FontAwesomeIcon icon={Icons[promotion.icon]}/>
            </div>
            <div className="promotion-desc">{promotion.desc}</div>
            <div className="promotion-btn">
                <button><Link to="" >Browse Products</Link></button>
            </div>
        </div>
        <div className="promotion-bottom">
            <img alt={promotion.name} src={promotion.image} />
        </div>
    </div>)
}
export default BottomPromotion
BottomPromotion.prototypes = {
    promotion: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        desc: PropTypes.string,
        icon: PropTypes.string,
        type: PropTypes.string,
    })
}