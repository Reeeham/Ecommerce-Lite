import React from 'react'
import './index.scss'
import Carousel from 'react-elastic-carousel';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProgressBarLine } from 'react-progressbar-line'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
function DiscountsList(props) {
    const { discounts } = props;

    function stockCountColor(countValue) {
        return countValue >= 5 ? 'hsl(143deg 65% 55%)' : countValue > 1 && countValue <= 5 ? 'orange' : 'pink';
    }
    return (
        <>
            <div className="container">
                <div className="discounts-header">
                    <h1 className="discounts-title">Recent Discounts</h1>
                    <Link to="" className="all-products-link">View All Products</Link>
                </div>
            </div>
            <div className="container discounts-list">
                <Carousel itemPadding={[0, 15, 10, 0]} itemsToShow={4} outerSpacing={0}>
                    {discounts.map((product, i) => {
                        return (<div className="discount-card" maxWidth="100%" minWidth="100%" key={i}>
                            <div className="buttons">
                                <div className="save-button">
                                    <img className="percent-badge-icon" alt="percent-badge" src="./../../images/discounts/percent-badge.svg" />
                                    <Link to=""><span className="save-text">Save</span> <span className="discount_amount">${product.discount_amount}</span></Link>
                                </div>
                                {
                                    product.flash_deal === "true" &&
                                    <div className="flash-deal-button">
                                        <FontAwesomeIcon icon={faBolt} className="deal-icon" style={{ marginRight: "5px" }} />
                                        <Link to="">Flash deal</Link>
                                    </div>
                                }

                            </div>

                                <div className="discount-img">
                                    <img alt="product" src={product.image} />
                                </div>
                                <div className="product-header">
                                    <div className="brand-name">{product.brand}</div>
                                    <div className="product-title">{product.title}</div>
                                    <div className="rate">
                                        <Rate className="rate-stars" size="10" style={{ fontSize: '1em' }} disabled={true} value={product.rate} allowHalf={true} />
                                        <div className="rate-values">
                                            <div className="rate-stars-value">{product.rate}</div>
                                            <div className="rate-count"> {product.rate_count}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-footer">
                                    <div className="price">
                                        <div className="new-price">${product.price}</div>
                                        <div className="old-price">${product.discount_price}</div>
                                    </div>
                                    <div className="stock">
                                        <div className="stock-progress">
                                            <ProgressBarLine
                                                value={product.stock_count}
                                                text=' '
                                                min={0}
                                                max={10}
                                                strokeWidth={10}
                                                trailWidth={10}
                                                styles={{
                                                    path: {
                                                        stroke: stockCountColor(product.stock_count)
                                                    },
                                                    trail: {
                                                        stroke: 'rgba(0, 0, 0, 0.2)'
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="stock-count" style={{ color: stockCountColor(product.stock_count) }}> {product.stock_count}  <span>{product.stock_count >= 2 ? ' Available in stock' : ' Last product in stock'}</span></div>
                                    </div>
                                </div>

                        </div>)
                    })}
                </Carousel>

            </div>
        </>
    );
}

export default DiscountsList

DiscountsList.propTypes = {
    discounts: PropTypes.shape([{
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
    }])
}