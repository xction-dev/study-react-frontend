import Chat from "./Chat";
import {useState} from "react";

// @ts-ignore
export default function ChatRoom({title, id, chatData}) {
    const [input,setInput] = useState("")

    return <div className="ChatRoom">
        <div className="chatContainer">
            {// @ts-ignore
                chatData.map((datum, index) => <Chat key={index} isMe={datum.isMe} content={datum.text} />)}
        </div>
            <input className="inputWrapper" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    </div>
}
