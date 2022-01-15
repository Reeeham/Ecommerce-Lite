import React from 'react';
import './index.scss';


export const CreateAccount = () => {
    return (
        <form className="create-account-form">
            <div className='shipping-address-row'>
                <div className='create-account-input'>
                    <label className='form-label'>First Name*</label>
                    <input className='form-input' />
                </div>
                <div className='shipping-address-input'>
                    <label className='form-label'>Last Name*</label>
                    <input className='form-input' />
                </div>
            </div>
            <div className='login-input'>
                <label className='form-label'>Email Address</label>
                <input className='form-input' />
            </div>
            <div className='login-input'>
                <label className='form-label'>Password</label>
                <input className='form-input' />
            </div>
            <button className='login-btn'>create account</button>
            <button className='cancel-btn'>cancel</button>

        </form>)
}