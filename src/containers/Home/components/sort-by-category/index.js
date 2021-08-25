

import { faAngleDown, faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rate from 'rc-rate';
import { useEffect, useState } from 'react';
import { ProgressBarLine } from 'react-progressbar-line';
import { Link, withRouter } from 'react-router-dom';
import { discountList } from '../../services/discountList';
import { stockCountColor } from '../product-card';
import './index.scss';


 const ProductsByCategory = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    discountList().then(res => {
        setProducts(res.data);
      }, (err) => {
      })
    }, [])

    return (
        <>
            <div className="container">
                <h5 className="tasks-header-num">Showing 291 tasks</h5>
                <div className="filter-header">
                    <div>Sort by: <Link to="" className="most-popular">Most Popular</Link>  <FontAwesomeIcon
                        icon={faAngleDown}
                        style={{ marginLeft: "0.3rem", fontSize: "smaller" }}
                    />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="products-by-category">
                    {products.map((product, i) => {
                        return (
                            <div key={i} className="product-cat-list-item">
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

                                <div className="product-img">
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
                </div>

            </div>
        </>);
}
export default withRouter(ProductsByCategory);