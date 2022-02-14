import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Checkbox = (props) => { 
    const[isChecked,setIsChecked] = useState(true);
    const { label , handleCheckboxChange} = props;
    
    const toggleCheckboxChange = () => {
        setIsChecked(!isChecked);
       if(label) handleCheckboxChange(label);
    }
    return (<>
   <div className="checkbox">
                <label>
                    <input
                        type="checkbox"
                        defaultValue={label}
                        checked={isChecked}
                        onChange={toggleCheckboxChange}
                    />
                    {label}
                </label>
            </div>
    </>)
} 


// Checkbox.defaultProps = { 
//     label  : '',
// }
Checkbox.propTypes = {
    label: PropTypes.string,
    handleCheckboxChange: PropTypes.func,
};


export default Checkbox;
