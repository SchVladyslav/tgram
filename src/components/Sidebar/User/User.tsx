import React from 'react'
import './User.css';
import { saved } from '../../../assets/img/index';

const User = () => {
    return (
        // onClick={handleUserClick.bind(null, user)}
        <div className="User" >
            <img className="User__img" src={saved} alt="" />
            <div className="User__details">
                <div className="User__title">
                    <h3 className="User__name">Saved messages</h3>
                    <h4 className="User__message">Eat something!</h4>
                </div>
                <div className="User__action">
                    <time className="User__time">19:25</time>
                    <span className="User__unread">2</span>
                </div>
            </div>
        </div>
    )
}

export default User;
