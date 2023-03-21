import React from 'react';
import './Header.css';

function Header(props) {
    const {name} = props;

    return (
        <div className="header">
            <div className="back_button">&lt;</div>
            <div className="name">{name}</div>
        </div>
    );
}

export { Header };

