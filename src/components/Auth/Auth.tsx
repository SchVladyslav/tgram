import React from 'react'
import './Auth.css';
import { logo } from '../../assets/img/index';

const Auth = () => {
    return (
        <div className="auth">
            <div className="auth-caption">
                <img className="auth__img" src={logo} alt="Telegram"/>
            </div>
            <div className="auth-content">
                <h2 className="auth__title">Sign in to Telegram</h2>
                <p>Please confirm your country code and enter your phone number.</p>                
            </div>
            <form className="auth-form">
                <fieldset className="auth__fieldset">
                    <legend>Country</legend>
                    <input className="auth__input auth__input-country" type="text" />
                </fieldset>
                <fieldset className="auth__fieldset">
                    <legend>Phone Number</legend>
                    <input className="auth__input auth__input-phone" type="text" />
                </fieldset>
                <label className="auth__label-container">
                    <input className="auth__checkbox" type="checkbox" />
                    <span className="checkmark"></span>
                    Keep me signed in
                </label>
                <button className="auth__btn">Next</button>
            </form>
        </div>
    )
}

export default Auth
