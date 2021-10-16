

import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rate from 'rc-rate';
import { useEffect, useState } from 'react';
import { ProgressBarLine } from 'react-progressbar-line';
import { Link } from 'react-router-dom';
import Loader from '../../../../components/Loader/Loader';
import { categoryList } from '../../services/categoryList';
import { allProducts, fetchProducts } from '../../services/discountList';
// import { Pagination } from '../pagination';
import { stockCountColor } from '../product-card';
import ProductDetails from '../product-details';
import './index.scss';


const ProductsByCategory = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [products, setProducts] = useState([]);
    const [nextPageNumber, setNextPageNumber] = useState(1);
    const [pageCount, setPageCount] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);


    useEffect(() => {
        getAllProductsByPage(nextPageNumber);
        getCount();
        getCategoryList();
    }, [nextPageNumber])

    const getCount = () => {
        allProducts().then(res => { 
            let count = Math.round(res.data.length / 5);
            const arrCount = [];
            for(let i=0; i < count; i++){
                arrCount.push(i+1);
            }
            setPageCount(arrCount);
        })
       
    }
    const getAllProductsByPage = (number) => { 
        fetchProducts(number).then(res => {
            setProducts(res.data);
            setLoading(false);
        });
    }

    const getCategoryList = () => { 
        categoryList().then(res => {
            setCategories(res.data);
            setLoading(false);
        }, (err) => {
        })
    }
    return (
        <>
            {loading && <Loader />}
            <div className="container">
                <h5 className="tasks-header-num">Showing 291 tasks</h5>
                <div className="filter-header">
                    <div>Sort by:
                        <select value={selectedCategoryId} onChange={(e) => { setSelectedCategoryId(e.target.value); }}>
                            <option>Choose Category</option>
                            {categories.map((cat, i) => {
                                return (<option key={i} value={cat.id}>{cat.title}</option>);
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="products-by-category">
                    {products.filter(e=> selectedCategoryId !== 0 ?  e.category_id === selectedCategoryId : true).map((product, i) => {
                        return (
                            <div key={i} className="product-cat-list-item" onClick={handleShow}>
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
            <ProductDetails show={show} handleClose={handleClose} />
            <div className="container">
                {/* <Pagination /> */}
                <div className="pagination-wrapper">
                    <ul className="pagination modal-1">
                        {nextPageNumber > 1 && <li><Link onClick={()=> {getAllProductsByPage(nextPageNumber-1);setNextPageNumber(nextPageNumber-1)}} className="prev">&laquo;</Link></li> }
                        
                        { pageCount.map((li,i) => {
                             return (<li> <Link key ={i} className={`${nextPageNumber === li ? "active" : ""} `} onClick={() => {getAllProductsByPage(li); setNextPageNumber(li) }}>{li}</Link></li>)
                             })
                        }
                        {nextPageNumber >= 1 && nextPageNumber < pageCount.length && <li><Link onClick={()=> { getAllProductsByPage(nextPageNumber+1); setNextPageNumber(nextPageNumber+1)} } className="next">&raquo;</Link></li> }
                    </ul>
                </div>
            </div>
        </>);
}
export default ProductsByCategory;