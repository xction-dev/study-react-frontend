import React from "react";
import './InputBox.css';
import Mic from '/src/assets/mic.svg';

function InputBox ({ content, onChange, onCreate }) {
    return (
        <div className="input-box">
            <input className="box" name="content" placeholder="문자 메시지" onChange={onChange} value={content} />
            <img src={Mic} className="mic" onClick={onCreate} style={{cursor: 'pointer'}}></img>
        </div>
    );
}

export default InputBox;