import React from 'react';
import './Header.css';
import BackBotton from '/src/assets/chevron.left.svg'
import Profile from '/src/assets/Profile.svg'

function Header() {
    return (
        <div className="header">
            <img src={BackBotton} className="backbotton" style={{cursor: 'pointer'}}></img>
            <div className="profile">
                <img src={Profile}></img>
                <div className="title">준영</div>
            </div>
        </div>
    );
}

export default Header;

