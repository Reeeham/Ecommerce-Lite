
import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import TopPromotion from './top-promotion-card';
import BottomPromotion from './bottom-promotion-card';



export const Promotion = (props) => {
    const { promotion } = props;
    
    return (<>
        {promotion.type === 'top' && <TopPromotion promotion={promotion}/>}
        {promotion.type === 'bottom' && <BottomPromotion promotion={promotion}/>}
    </>)
}
export default Promotion
Promotion.prototypes = {
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