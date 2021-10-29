import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';


export const Pagination = (props) => { 
    const {nextPageNumber, getAllProductsByPage, pageCount, setNextPageNumber } = props;
    return (<div className="container">
    <div className="pagination-wrapper">
        <ul className="pagination modal-1">
            {nextPageNumber > 1 && <li><Link onClick={(e) => { e.preventDefault(); getAllProductsByPage(nextPageNumber-1);setNextPageNumber(nextPageNumber-1)}} className="prev" to="/">&laquo;</Link></li> }
            
            { pageCount.map((li,i) => {
                 return (<li key={i}> <Link  className={`${nextPageNumber === li ? "active" : ""} `} onClick={(e) => { e.preventDefault(); getAllProductsByPage(li); setNextPageNumber(li) }} to="/">{li}</Link></li>)
                 })
            }
            {nextPageNumber >= 1 && nextPageNumber < pageCount.length && <li><Link onClick={(e) => { e.preventDefault(); getAllProductsByPage(nextPageNumber+1); setNextPageNumber(nextPageNumber+1)} } className="next" to="/">&raquo;</Link></li> }
        </ul>
    </div>
</div>)
}