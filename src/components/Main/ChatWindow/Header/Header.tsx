import React from 'react'
import './Header.css'
import {contact, search, more} from '../../../../assets/img/index';

const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src={contact} alt="" />
            <div className="header__details">
                <div className="header__title">
                    <h3 className="header__name">Pavel Durov</h3>
                    <h4 className="header__message">last seen just now</h4>
                </div>
                <div className="header__action">
                    <img src={search} alt=""/>
                    <img src={more} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header
