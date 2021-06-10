import React from 'react'
import "./index.scss"
import Carousel from 'react-elastic-carousel';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const breakPoints = [
    { width: 1, itemsToShow: 3 }
];


function CategoryList(props) {
    const { categories } = props;
    return (
        <div className="container">
            <Carousel breakPoints={breakPoints} className="category-list">


                {categories.map((cat,i) => {
                    return(
                        <div className="category-card" key={i}>
                        <div className="category-content">
                            <h1 className="category-title">{cat.title}</h1>
                            <p className="category-description">{cat.description}</p>
                            <button className="category-btn"><Link to={cat.action_link} >Shop Now</Link></button>
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
    categories : PropTypes.shape([{
        id : PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        action_link: PropTypes.string,
        image: PropTypes.string,
        alt_value: PropTypes.string
    }])
}