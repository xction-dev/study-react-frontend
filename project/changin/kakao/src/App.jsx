import { YourChat, ChatBox } from "./component/Chat/Chat.jsx";
import { Input } from "./component/Input/Input.jsx";
import { Header } from "./component/Header/Header.jsx";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const initialChatArray = [
  "형 프랑스미학 안 옴?",
  "ㅇㅇ",
  "ㅋㅋㅋㅋㅋ",
  "듣고재밌으면알려주셈",
  "ㅋㅋㅋㅋㅇㅋㅇㅋ",
  "프랑스미학 재밋냐",
  "오티는 미학 개괄만 했는디",
  "교수님 재밌음",
  "흠...",
  "고민",
  "안들을듯근데",
  "듣자",
  "잼쓸듯",
];

function App() {
  const [headerState, setHeaderState] = useState(false);
  // const [name, setName] = useState("가나다")
  const [chatArray, setChatArray] = useState(initialChatArray);
  const [id, setId] = useState("myChat");
  const handleButtonClick = (buttonName) => {
    setId(buttonName);
  };

  return (
    <div
      className="container"
      onClick={() => {
        setHeaderState(!headerState);
      }}
    >
      {headerState ? <Header name="박준영 형" chat_num={chatArray.length} /> : <div />}

      <ChatBox id="myChat" text={chatArray[0]} />

      <YourChat name="박준영 형" text={chatArray[1]} />
      {chatArray.slice(2, 4).map((text) => (
        <ChatBox id="yourChat" text={text} />
      ))}

      <ChatBox id="myChat" text={chatArray[4]} />

      <YourChat name="박준영 형" text={chatArray[5]} />

      {chatArray.slice(6, 8).map((text) => (
        <ChatBox id="myChat" text={text} />
      ))}

      <YourChat name="박준영 형" text={chatArray[8]} />
      {chatArray.slice(9, 11).map((text) => (
        <ChatBox id="yourChat" text={text} />
      ))}

      {chatArray.slice(11, 13).map((text) => (
        <ChatBox id="myChat" text={text} />
      ))}

      {chatArray.slice(13, ).map((text) => (
        {id} === "myChat" ? <ChatBox id="myChat" text={text}/> : <ChatBox id="yourChat" text={text}/> 
      ))}

      <Input data={chatArray} setter={setChatArray} handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
