import React from 'react';
import './index.scss';


export const CreateAccount = () => {
    return (
        <form className="create-account-form">
            <div className='inputs-row'>
                <div className='input'>
                    <label className='form-label'>First Name*</label>
                    <input className='form-input' />
                </div>
                <div className='input'>
                    <label className='form-label'>Last Name*</label>
                    <input className='form-input' />
                </div>
            </div>
            <div className="inputs-row">

                <div className='input'>
                    <label className='form-label'>Email Address</label>
                    <input className='form-input' />
                </div>
            </div>
            <div className="inputs-row">

                <div className='input'>
                    <label className='form-label'>Password</label>
                    <input className='form-input' />
                </div>
            </div>

            <button className='login-btn'>create account</button>
            <button className='cancel-btn'>cancel</button>

        </form>)
}