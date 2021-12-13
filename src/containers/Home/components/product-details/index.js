import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { addToCart } from '../../services/cartService';
import { categoryList } from '../../services/categoryList';
import { Breadcrumbs } from '../breadcrumbs';
import { Reviews } from '../reviews';
import './index.scss'

export const ProductDetails = (props) => {
    const { show, handleClose, product } = props;
    const [categories, setCategories] = useState([]);
    //ref to the element for which we want to detect outside clicks
    // const ref = useRef();
    // useOnClickOutside(ref, () => handleClose()) 
    useEffect(() => {
        categoryList().then(res => {
            setCategories(res.data);
        }, (err) => {
        })
    }, []);
    const categoryName = (catId) => {
        let cat = categories.find(c => c.id === catId);
        return cat ? cat.title : '';
    }
    //custom hook
    // function useOnClickOutside(ref, handler) {
    //     useEffect(()=> {
    //         const listener = (event) => {
    //             console.log(event)
    //             //do nothing if clicking ref's element or descendent elements
    //             if(!ref.current || ref.current.contains(event.target)){
    //                 return;
    //             }
    //             handler(event);
    //         };
    //         document.addEventListener("mouseDown", listener);
    //         document.addEventListener("touchstart", listener);
    //         return () => {
    //             document.removeEventListener("mousedown", listener)
    //             document.removeEventListener("touchstart", listener)
    //         }

    //     }, [ref, handler])
    // }
    return (<>
        {show &&
            <div id="demo-modal" className="modal">
                <div className="modal-content">
                    <div className="product-details">
                        <div className="product-details-header">
                            <Breadcrumbs navList={['Home', 'Shop', categoryName(product.category_id)]} />
                        </div>
                        <div className="product-details-body">
                            <div className="photo-gallery">
                                <div className="first-img"><img src={product.image} alt="" /></div>
                                <div className="other-images">
                                    <img src={product.image} alt="" />
                                    <img src={product.image} alt="" />
                                    <img src={product.image} alt="" />
                                    <img src={product.image} alt="" />
                                    <img src={product.image} alt="" />

                                </div>
                            </div>
                            <div className="title-and-desc">
                                <div className="title">{product.title}</div>
                                <div className="reviews">
                                    <Reviews rate={product.rate} rateCount={product.rate_count} />
                                </div>
                                <div className="price"> {product.price}$</div>
                                <div className="description">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </div>
                                <div className="color">Color
                                    <div className="color-options">
                                        <select defaultValue="red">
                                            <option>Choose Color</option>
                                        </select></div>
                                </div>
                                <div className="clear-selection">clear selection</div>
                                <div className="add-to-cart">
                                    <input defaultValue="1" className="qauntity" onChange={(e) => {e.preventDefault()}}></input>
                                    <button className="cursor" onClick={(e) => { e.preventDefault(); addToCart(product)}}>Add to cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Link to="/" className="modal-close" onClick={(e) => {e.preventDefault();handleClose()}}>&times;</Link>

                </div>
            </div>
        }
    </>
    )

}

export default ProductDetails;