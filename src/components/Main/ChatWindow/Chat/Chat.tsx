import React from 'react'
import './Chat.css'

const Message = () => {
    const  isUserMsg  = true;
    return (
        <span className={`Message ${isUserMsg ? "isUserMsg" : ""}`}>
            Tell me the differences between a traveler and a tourist
        </span>
    );
};

const Message2 = () => {
    const  isUserMsg  = false;
    return (
        <span className={`Message ${isUserMsg ? "isUserMsg" : ""}`}>
            Differences between a traveler and a tourist
        </span>
    );
};

const Chat = () => {
    return (
        <div className="Chat">
            <Message />
            <Message2 />
        </div>
    )
}

export default Chat
