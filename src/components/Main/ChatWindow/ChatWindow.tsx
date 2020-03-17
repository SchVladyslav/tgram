import React from 'react'
import './ChatWindow.css';
import Header from './Header/Header';
import Chat from './Chat/Chat';
import MessageInput from './MessageInput/MessageInput';

const ChatWindow = () => {
    return (
        <div className="ChatWindow">
            <Header />
            <Chat />
            <MessageInput />
        </div>
    )
}

export default ChatWindow;
