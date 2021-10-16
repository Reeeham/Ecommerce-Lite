import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import PropTypes from 'prop-types';

const HeroView = (props) => {
    const {heroViewData} = props;
    return (
            <div className="container">
                <div className="content">
                    <p className="promotional-text">{heroViewData.promotion_text}</p>
                    <h1 className="kitchen-text">{heroViewData.title}</h1>
                    <p className="commodo-text">{heroViewData.description}</p>
                    {heroViewData.action_link !== undefined && <Link to={heroViewData.action_link} className="browse-btn">Browse Products</Link>}
                    <div>
                    <p className="border-text"></p>
                    <img className="assistant-img" alt="assistant" src={heroViewData.assistant_image}></img>
                    <p className="assistant-text">Talk to an assistant</p>
                    <FontAwesomeIcon
                            icon={faAngleRight}
                            className="cursor right-icon"
                        />
                    </div>
                </div>
                <div className="bg-img">
                    <img src={heroViewData.bg_image} alt="background"></img>
                </div>
            </div>
    )
}

export default HeroView

HeroView.propTypes = { 
    heroViewData : PropTypes.shape({
        promotion_text : PropTypes.string,
        title : PropTypes.string,
        description : PropTypes.string,
        bg_image : PropTypes.string,
        action_link : PropTypes.string,
        assistant_image : PropTypes.string
    })
};