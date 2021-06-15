import React from 'react'
import './index.scss'
import Carousel from 'react-elastic-carousel';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


function CategoryList(props) {
    const { categories } = props;
    return (
        <div className="container category-list">
            <Carousel  itemPadding={[0,0,0, 0]} itemsToShow={3} outerSpacing={0}>
                {categories.map((cat, i) => {
                    return (
                        <div className="category-card" key={i} maxWidth="100%">
                            <div className="category-content">
                                <div>
                                    <h1 className="category-title">{cat.title}</h1>
                                    <p className="category-description">{cat.description}</p>
                                </div>
                                <div>
                                    <button className="category-btn"><Link to={cat.action_link}>Shop Now</Link></button>
                                </div>
                            </div>
                            <div className="category-img">
                                <img src={cat.image} alt={cat.alt_value}></img>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
            
        </div>
    );
}

export default CategoryList
CategoryList.propTypes = {
    categories: PropTypes.shape([{
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        action_link: PropTypes.string,
        image: PropTypes.string,
        alt_value: PropTypes.string
    }])
}