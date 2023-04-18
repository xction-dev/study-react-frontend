import React from "react";
import './Chat.css';
import ReactScrollableFeed from "react-scrollable-feed"

function ChatItem({ chat, onRemove }) {
    return (
        <div 
            className="chat-box"
            style={
                {cursor: 'pointer', background: chat.isMine ? '#468CF7' : '#E9E9EB', color: chat.isMine ? "white" : "black", textAlign: chat.isMine ? "right": "left", marginLeft: chat.isMine ? "auto" : "20px"}} 
            onClick={() => onRemove(chat.id)}>{chat.content}</div>
    );
}

function Chat({ chats, onRemove }) {
    return (
        <div className="chatbox-list">
           <ReactScrollableFeed>
           <p>오전 9:41</p>
           {chats.map(chat => (
                <ChatItem chat={chat} key={chats.id} onRemove={onRemove} />
            ))}
           </ReactScrollableFeed>
        </div>
    );
}

export default Chat;