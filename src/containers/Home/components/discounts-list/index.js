import React from 'react'
import './index.scss'
import Carousel from 'react-elastic-carousel';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import 'rc-rate/assets/index.css';
import { ProductCard } from '../product-card';

const DiscountsList = (props) => {
    const { discounts } = props;

    return (
        <>
            <div className="container">
                <div className="discounts-header">
                    <h1 className="discounts-title">Recent Discounts</h1>
                    <Link to="/" className="all-products-link">View All Products</Link>
                </div>
            </div>
            <div className="container discounts-list">
                <Carousel itemPadding={[0, 0, 0, 0]} itemsToShow={4} outerSpacing={0}>
                    {discounts.map((product, i) => {
                        return (<ProductCard key={i} product={product}/>)
                    })}
                </Carousel>

            </div>
        </>
    );
}

export default DiscountsList
DiscountsList.propTypes = { 
    discounts: PropTypes.array
}
DiscountsList.defaultProps  = {
    discounts: [{
        id: PropTypes.number,
        discount_amount: PropTypes.string,
        flash_deal: PropTypes.string,
        image: PropTypes.string,
        brand: PropTypes.string,
        title: PropTypes.string,
        rate: PropTypes.string,
        rate_count: PropTypes.string,
        price: PropTypes.string,
        discount_price: PropTypes.string,
        stock_count: PropTypes.string,
        category_id : PropTypes.number 
    }]
}