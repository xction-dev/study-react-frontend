import React, {useState} from "react";
import "./Input.css";


function Input({data, setter}) {
const [inputChat, setInputChat] = useState("")

    return (
        <div className="input-cont">
            <button onClick={()=>{
                setter([...data, inputChat])
                setInputChat("")
            }}>+</button>
            <input type="text" name="message" value={inputChat} onChange={(e)=>{
              setInputChat(e.target.value);
            }}/>
        </div>
    )
}

export { Input };
