import React from 'react';
import './index.scss';


export const Login = () => {
    return (<>
    <p>Don’t have an account? <span className='link-color '>Create an account</span> to continue.</p>
    <div className='login-input'>
        <label className='form-label'>Email Address</label>
        <input  className='form-input'/>
    </div>
    <div className='login-input'>
        <label className='form-label'>Password</label>
        <input  className='form-input'/>
    </div>
    <button className='login-btn'>sign in</button>
    </>);
}