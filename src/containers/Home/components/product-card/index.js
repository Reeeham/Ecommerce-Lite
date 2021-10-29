import React from 'react'
import { faBolt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ProgressBarLine } from "react-progressbar-line";
import { Link } from "react-router-dom"
import './index.scss'
import { Reviews } from '../reviews';

export const stockCountColor = (countValue) => {
    return countValue >= 5 ? 'hsl(143deg 65% 55%)' : countValue > 1 && countValue <= 5 ? 'orange' : 'pink';
}
export const ProductCard = (props) => { 
    
    const {product, handleShow, productClassName} = props; 
     return(<div className={`product-card ${productClassName ? 'discount-product' : 'product-card-default' }`} onClick={(e) => {handleShow(product)}}>
     <div className="buttons">
         <div className="save-button">
             <img className="percent-badge-icon" alt="percent-badge" src="./../../images/discounts/percent-badge.svg" />
             <Link to="/"><span className="save-text">Save</span> <span className="discount_amount">${product.discount_amount}</span></Link>
         </div>
         {
             product.flash_deal === "true" &&
             <div className="flash-deal-button">
                 <FontAwesomeIcon icon={faBolt} className="deal-icon" style={{ marginRight: "5px" }} />
                 <Link to="/">Flash deal</Link>
             </div>
         }

     </div>

         <div className="product-img">
             <img alt="product" src={product.image} />
         </div>
         <div className="product-header">
             <div className="brand-name">{product.brand}</div>
             <div className="product-title">{product.title}</div>
             <Reviews rate={product.rate} rateCount={product.rate_count} />
             
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
}