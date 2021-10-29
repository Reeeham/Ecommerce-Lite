import React from 'react';
import './index.scss';

export const FilterByCategory = (props) => {
    const {products, selectedCategoryId, setSelectedCategoryId, categories} = props;
    return (<>
     <div className="container">
                <h5 className="tasks-header-num">Showing {products.length} tasks</h5>
                <div className="filter-header">
                    <div> <span className="mr-sm">Sort by:</span>
                        <select value={selectedCategoryId} defaultValue={undefined}  onChange={(e) => { setSelectedCategoryId(e.target.value); }}>
                            <option  value='undefined'>Choose Category</option>
                            {categories.map((cat, i) => {
                                return (<option key={i} value={cat.id}>{cat.title}</option>);
                            })}
                        </select>
                    </div>
                </div>
            </div>
    </>)
}
