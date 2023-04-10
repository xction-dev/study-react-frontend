import Chat from "./Chat";
import { useState } from "react";

type ChatDataType = {
  id: number;
  isMine: boolean;
  content: string;
};

type Props = {
  title: string;
  id: number;
  chatData: ChatDataType[];
};

export default function ChatRoom({ title, id, chatData, addMessage }: Props) {
  const [input, setInput] = useState("");

  const sendMyMessage = () => {
    addMessage(id, true, input);
    setInput("");
  };
  const sendYourMessage = () => {
    addMessage(id, false, input);
    setInput("");
  };

  return (
    <div className="ChatRoom">
      <div className="chatContainer">
        {chatData.map((datum) => (
          <Chat key={datum.id} isMine={datum.isMine} content={datum.content} />
        ))}
      </div>
      <input
        className="inputWrapper"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={sendMyMessage}>Send My Message</button>
      <button onClick={sendYourMessage}>Send Your Message</button>
    </div>
  );
}
