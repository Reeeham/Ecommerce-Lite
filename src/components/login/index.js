import React from 'react';
import './index.scss';


export const Login = () => {
    return (<>
        <p>Don’t have an account? <span className='link-color '>Create an account</span> to continue.</p>
        <div className="inputs-row">

            <div className='input'>
                <label className='form-label'>Email Address</label>
                <input className='form-input' />
            </div>
            <div className='input'>
                <label className='form-label'>Password</label>
                <input className='form-input' />
            </div>
        </div>
        <button className='primary-btn'>sign in</button>
    </>);
}