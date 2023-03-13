import { YourChat, ChatBox } from "./component/Chat/Chat.jsx";
import { Input } from "./component/Input/Input.jsx";
import { Header } from "./component/Header/Header.jsx";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <div className="container">

      <Header name="박준영 형"/>

      <ChatBox id="myChat" text="형 프랑스미학 안 옴?" />

      <YourChat name="박준영 형" text="ㅇㅇ"/>
      <ChatBox id="yourChat" text="ㅋㅋㅋㅋㅋ" />
      <ChatBox id="yourChat" text="듣고재밌으면알려주셈" />

      <ChatBox id="myChat" text="ㅋㅋㅋㅋㅇㅋㅇㅋ" />

      <YourChat name="박준영 형" text="프랑스미학 재밋냐"/>

      <ChatBox id="myChat" text="오티는 미학 개괄만 했는디" />
      <ChatBox id="myChat" text="교수님 재밌음" />

      <YourChat name="박준영 형" text="흠..."/>
      <ChatBox id="yourChat" text="고민" />
      <ChatBox id="yourChat" text="안들을듯근데" />

      <ChatBox id="myChat" text="듣자" />
      <ChatBox id="myChat" text="잼쓸듯" />

      <Input />
    </div>
  );
}

export default App;
