import React from "react";
import './InputBox.css';

function InputBox ({ content, onChange, onCreate }) {
    return (
        <div className="input-box">
            <input name="content" placeholder="문자 메시지" onChange={onChange} value={content} />
            <button onClick={onCreate} style={{cursor: 'pointer'}}>전송</button>
        </div>
    );
}

export default InputBox;