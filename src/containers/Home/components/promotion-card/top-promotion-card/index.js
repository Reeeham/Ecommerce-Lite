import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import PropTypes from 'prop-types';
import * as Icons from '@fortawesome/free-solid-svg-icons';



export const TopPromotion = (props) => {
    const { promotion } = props;
    
    const divStyle = {
        'background': promotion.bg_color,
    };

    return (<div className="promotion">
        <div className="promotion-top">
            <img alt={promotion.name} src={promotion.image} />
        </div>
        <div className="promotion-bottom bottom"  style={divStyle}>
            <div className="promotion-icon">
                <FontAwesomeIcon icon={Icons[promotion.icon]}/>
            </div>
            <div className="promotion-desc">{promotion.desc}</div>
            <div className="promotion-btn">
                <button><Link to="/" >Browse Products</Link></button>
            </div>
        </div>
    </div>)
}
export default TopPromotion
TopPromotion.prototypes = {
    promotion: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
        desc: PropTypes.string,
        icon: PropTypes.string,
        type: PropTypes.string,
        bg_color: PropTypes.string
    })
}