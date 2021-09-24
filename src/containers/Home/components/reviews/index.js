import Rate from 'rc-rate';
import React from 'react';
import './index.scss'

export const Reviews = (props) => {
    const { rate, rateCount } = props
    return (<div className="rate">
        <Rate className="rate-stars" size="10" style={{ fontSize: '1em' }} disabled={true} value={rate} allowHalf={true} />
        <div className="rate-values">
            <div className="rate-stars-value">{rate}.</div>
            <div className="rate-count"> {rateCount}</div>
        </div>
    </div>)
}


