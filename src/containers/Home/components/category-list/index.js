import React from 'react'
import "./index.scss"
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 3 }
  ];
  

function CategoryList() {
    return (
        <div className="container">
        <Carousel breakPoints={breakPoints} className="category-list">
 
            <div className="category-card">
                <div>
                    <h1 className="category-title">Fashion</h1>
                    <p className="category-description">commodo dolor sit amet cum diceam est un partuient</p>
                    <button className="category-btn">Shop Now</button>
                </div>
                <div className="bg-img">
                    <img src="../images/categories/Shoe.jpg" alt="background"></img>
                </div>
            </div>
            <div className="category-card">
                <div>
                    <h1 className="category-title">Fashion</h1>
                    <p className="category-description">commodo dolor sit amet cum diceam est un partuient</p>
                    <button className="category-btn">Shop Now</button>
                </div>
                <div className="bg-img">
                    <img src="../images/categories/Shoe.jpg" alt="background"></img>
                </div>
            </div>
           <div className="category-card">
                <div>
                    <h1 className="category-title">Fashion</h1>
                    <p className="category-description">commodo dolor sit amet cum diceam est un partuient</p>
                    <button className="category-btn">Shop Now</button>
                </div>
                <div className="bg-img">
                    <img src="../images/categories/Shoe.jpg" alt="background"></img>
                </div>
            </div>
            <div className="category-card">
                <div>
                    <h1 className="category-title">Fashion</h1>
                    <p className="category-description">commodo dolor sit amet cum diceam est un partuient</p>
                    <button className="category-btn">Shop Now</button>
                </div>
                <div className="bg-img">
                    <img src="../images/categories/Shoe.jpg" alt="background"></img>
                </div>
            </div>
            <div className="category-card">
                <div>
                    <h1 className="category-title">Fashion</h1>
                    <p className="category-description">commodo dolor sit amet cum diceam est un partuient</p>
                    <button className="category-btn">Shop Now</button>
                </div>
                <div className="bg-img">
                    <img src="../images/categories/Shoe.jpg" alt="background"></img>
                </div>
            </div>
           <div className="category-card">
                <div>
                    <h1 className="category-title">Fashion</h1>
                    <p className="category-description">commodo dolor sit amet cum diceam est un partuient</p>
                    <button className="category-btn">Shop Now</button>
                </div>
                <div className="bg-img">
                    <img src="../images/categories/Shoe.jpg" alt="background"></img>
                </div>
            </div>
        </Carousel>
        </div>
       
    );
}

export default CategoryList
