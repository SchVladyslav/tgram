import React from 'react'
import './Main.css'
import Empty from './Empty/Empty'
import ChatWindow from './ChatWindow/ChatWindow'

const Main = () => {
    return (
        <main className="main">
           {/* <Empty /> */}
           <ChatWindow />
        </main>
    )
}

export default Main
