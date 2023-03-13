import React from "react";
import "./Chat.css";

//상대방 카톡 시작용. 프사, 이름, 첫번째 메시지
function YourChat(props) {
  const {name, text} = props;

  return (
    <div className="your-cont">
      <div className="your-profile">
        <img src="../src/assets/IMG_3259.jpg"></img>
      </div>
      <div className="your-cont2">
        <div className="your-name">
          <p>{name}</p>
        </div>
        <div className="your-chatbox">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

//나머지 채팅 구현. id 따라 나와 상대방 구분
function ChatBox(props) {
  const { id, text } = props;
  //const id = props.id
  //const text = prop.text
  //props = {id:~~~, text:~~~}

  const chatcont_styles = {
    justifyContent: id === "myChat" ? "flex-end" : "flex-start",
  };

  const chatbox_styles = {
    backgroundColor: id === "myChat" ? "#FEE500" : "#3A3A3B",
    color: id === "myChat" ? "#2B291C" : "#F2F2F2",
    marginLeft: id === "myChat" ? "0" : "3.5em",
    marginRight: id === "myChat" ? "0.5em" : "0" 
  };

  return (
    <div className="chat-container" style={chatcont_styles}>
      <div className="chatbox" style={chatbox_styles}>
        <p>{text}</p>
      </div>
    </div>
  );
}


export { YourChat, ChatBox };
