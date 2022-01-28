import React from 'react';
import './index.scss'


export const ShippingAddress = () => {
    return (<>
        <h5>Shipping Address</h5>
        <form className="shipping-address-form">
            <div className='inputs-row'>
                <div className="input">
                    <label className='form-label'>First Name*</label>
                    <input className='form-input'/>
                </div>
                <div className="input">
                    <label className='form-label'>Last Name*</label>
                    <input  className='form-input'/>
                </div>
            </div>
            <div className='inputs-row'>
                <div className="input">
                    <label className='form-label'>Addres title (e.g. Home,Work)*</label>
                    <input className='form-input'/>
                </div>
                <div className="input">
                    <label className='form-label'>Phone Number (01XXXXXXXXX)*</label>
                    <input  className='form-input'/>
                </div>
            </div>
            <div className='inputs-row'>
                <div className="input">
                    <label className='form-label'>Apartment*</label>
                    <input className='form-input' />
                </div>
                <div className="input">
                    <label className='form-label'>Floor*</label>
                    <input  className='form-input' />
                </div>
            </div>
            <div className='inputs-row'>
                <div className="input">
                    <label className='form-label'>Landmark*</label>
                    <input className='form-input' />
                </div>
                <div className="input">
                    <label className='form-label'>Governorate (e.g. Cairo, Giza)*</label>
                    <input className='form-input' />
                </div>
            </div>
            <div className='inputs-row'>
                <div className="input">
                    <label className='form-label'>Country</label>
                    <input className='form-input' />
                </div>
                <div className="input">
                    <label className='form-label'>City/District *</label>
                    <input  className='form-input' />
                </div>
            </div>
        </form>
    </>);
}