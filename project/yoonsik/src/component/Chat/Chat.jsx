import React from "react";
import './Chat.css';

function ChatItem({ chat, onRemove }) {
    return (
        <div 
            className="chat-box"
            style={
                {cursor: 'pointer', background: chat.isMine ? '#468CF7' : '#E9E9EB', marginLeft: chat.isMine ? "265px" : "20px", color: chat.isMine ? "white" : "black"}} 
            onClick={() => onRemove(chat.id)}>{chat.content}</div>
    );
}

function Chat({ chats, onRemove }) {
    return (
        <div>
            {chats.map(chat => (
                <ChatItem chat={chat} key={chats.id} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default Chat;