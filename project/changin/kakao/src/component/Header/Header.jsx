import React from "react";
import "./Header.css";

function Header({ name, chat_num } ) {

    return (
        <div className="header">
            <div className="message_count">&lt; {chat_num}</div>
            <div className="name">{name}</div>
            <div className="icons"></div>
        </div>
    );
}

export { Header };