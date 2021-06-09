import React from 'react'
import "./index.scss"

function CategoryList() {
    return (
        <div className="container category-list">
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
        </div>
    );
}

export default CategoryList
