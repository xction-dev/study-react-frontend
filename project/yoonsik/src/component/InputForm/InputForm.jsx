import React, {useState} from "react";
import "./InputForm.css";

function InputForm () {
    const [text, setText] = useState('');

    const onChange = (e) => {
    setText(e.target.value);
    };

    return (
        <div className="form">
            <input type='text' value={text} onChange={onChange} placeholder="iMessage" name="input-cont"/>
        </div>
    )
  
}

export { InputForm };