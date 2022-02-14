import React from "react";
import Checkbox from "../../../../components/checkbox";
import "./index.scss";

export const ShippingAddress = () => {
  const toggleCheckbox = () => {};
  return (
    <>
      <h5>Shipping Address</h5>
      <form className="shipping-address-form">
        <div className="inputs-row">
          <div className="input">
            <label className="form-label">First Name*</label>
            <input className="form-input" />
          </div>
          <div className="input">
            <label className="form-label">Last Name*</label>
            <input className="form-input" />
          </div>
        </div>
        <div className="inputs-row">
          <div className="input">
            <label className="form-label">Addres title (e.g. Home,Work)*</label>
            <input className="form-input" />
          </div>
          <div className="input">
            <label className="form-label">Phone Number (01XXXXXXXXX)*</label>
            <input className="form-input" />
          </div>
        </div>
        <div className="inputs-row">
          <div className="input">
            <label className="form-label">Apartment*</label>
            <input className="form-input" />
          </div>
          <div className="input">
            <label className="form-label">Floor*</label>
            <input className="form-input" />
          </div>
        </div>
        <div className="inputs-row">
          <div className="input">
            <label className="form-label">Landmark*</label>
            <input className="form-input" />
          </div>
          <div className="input">
            <label className="form-label">
              Governorate (e.g. Cairo, Giza)*
            </label>
            <input className="form-input" />
          </div>
        </div>
        <div className="inputs-row">
          <div className="input">
            <label className="form-label">Country</label>
            <input className="form-input" />
          </div>
          <div className="input">
            <label className="form-label">City/District *</label>
            <input className="form-input" />
          </div>
        </div>
        <div className="inputs-row">
          <Checkbox
            label="Save this address in my address book."
            handleCheckboxChange={toggleCheckbox}
          />
        </div>
        <div className="inputs-row">
          <Checkbox
            label="My Billing address is the same as my Shipping address"
            handleCheckboxChange={toggleCheckbox}
          />
        </div>
        <h4 className="mt-2">Shipping Method</h4>
        <ul className="options-list">
          <li className="option-card" style={{ borderBottom: "none" }}>
            <div className="option-header">
              <div className="radio-button">
                <input
                  type="radio"
                  name="payment-method"
                  value="cash"
                  className="radio-button"
                />
                30 LE (paid once upon delivery)
              </div>
            </div>
          </li>
        </ul>
        <button className='primary-btn'>CONTINUE</button>
      </form>
    </>
  );
};
