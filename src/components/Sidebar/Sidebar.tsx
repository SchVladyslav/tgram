import React from 'react'
import './Sidebar.css'

import User from './User/User'
import Search from './Search/Search'
import Nav from './Nav/Nav'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="container">
                <div className="sidebar__header">
                    <Nav />
                    <Search />
                </div>
                <User />
                <User />
                <User />
            </div>
        </aside>
    )
}

export default Sidebar
