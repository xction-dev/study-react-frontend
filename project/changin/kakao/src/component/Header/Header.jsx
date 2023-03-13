import React from "react";
import "./Header.css";

function Header(props) {
    const {name} = props;

    return (
        <div className="header">
            <div className="message_count">&lt; 13</div>
            <div className="name">{name}</div>
            <div className="icons"></div>
        </div>
    );
}

export { Header };