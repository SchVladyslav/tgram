import React, { useState } from 'react'
import './Nav.css';
import { newGroup, archive, contact, saved, settings, help, menu } from '../../../assets/img/index';

const Nav = () => {

    const [isOpen, setOpen] = useState(false);
    const handleButtonClick = () => isOpen ? setOpen(false) : setOpen(true);
    
    return (
        <nav className="nav">
            <button className={isOpen ? "nav__toggle--active nav__toggle" : "nav__toggle"} onClick={handleButtonClick}>
                <img src={menu} alt="Menu"/>
            </button>
            {isOpen ? <ul className="nav__list">
                <li className="nav__item">
                    <img src={newGroup} alt="New Group" />
                    <span>New Group</span>
                </li>
                <li className="nav__item">
                    <img src={contact} alt="Contacts" />
                    <span>Contacts</span>
                </li>
                <li className="nav__item">
                    <img src={archive} alt="Archived" />
                    <span>Archived</span>
                </li>
                <li className="nav__item">
                    <img src={saved} alt="Saved" />
                    <span>Saved</span>
                </li>
                <li className="nav__item">
                    <img src={settings} alt="Settings" />
                    <span>Settings</span>
                </li>
                <li className="nav__item">
                    <img src={help} alt="Help" />
                    <span>Help</span>
                </li>
            </ul> : ""}            
        </nav>
    )
}

export default Nav
