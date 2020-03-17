import React from 'react'
import './MessageInput.css';

const MessageInput = () => {
    return (
        <div className="message">
            <input className='messageInput' type="text" placeholder="Message"/>
        </div>
    )
}

export default MessageInput
