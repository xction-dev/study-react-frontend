import Chat from "./Chat";
import {useState} from "react";

export default function ChatRoom({
                                     title,
                                     id,
                                     chatData
                                 }: { title: string, id: number, chatData: { isMe: boolean, text: string }[] }) {

    const [input, setInput] = useState("");

    return (<div className="ChatRoom">
        <div className="chatContainer">
            {chatData.map((datum, index) => <Chat key={index} isMe={datum.isMe} content={datum.text}/>)}
        </div>
        <input className="inputWrapper" value={input} onChange={(e) => {
            setInput(e.target.value)
        }}/>
    </div>)
}