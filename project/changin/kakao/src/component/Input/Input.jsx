import React, { useState } from "react";
import "./Input.css";

function Input( { data, setter, handleButtonClick }) {

    const [inputChat, setInputChat] = useState("");
    
    return (
        <div className="input-cont">
            <button className="your-button" onClick={()=>{
                setter([...data, inputChat]);
                setInputChat("");
                handleButtonClick("yourChat");
            }}>
                +
            </button>

            <button className="my-button" onClick={()=>{
                setter([...data, inputChat]);
                setInputChat("");
                handleButtonClick("myChat");
            }}>
                +
            </button>

            <input type="text" name="message" value={inputChat}
            onChange={(e)=>{
                setInputChat(e.target.value);
            }} />
        </div>
    )
}

export { Input };
