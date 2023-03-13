import { YourChat, ChatBox } from "./component/Chat/Chat.jsx";
import { Input } from "./component/Input/Input.jsx";
import { Header } from "./component/Header/Header.jsx";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

/*

 */
const a = ()=>{}
const onClickHandler = () =>{
    console.log("clicked")
}


const initialChatArray = ["ㅋㅋㅋㅋㅋ", "듣고재밌으면알려주셈", "오키!"];



function App() {
    //    const headerStateArray = useState(true); // [getter, setter]
    //    const headerState = headerStateArray[0]
    //    const setHeaderState = headerStateArray[1]
    const [headerState, setHeaderState] = useState(true)
    const [name, setName] = useState("가나다")
    const [chatArray, setChatArray] = useState(initialChatArray)

  return (
    <div className="container" onClick={()=>{

    }}>
      {headerState ? <Header name="박준영 형"/> : <div/>}

      <ChatBox id="myChat" text="형 프랑스미학 안 옴?"  />

      <YourChat name={name} text="ㅇㅇ"/>
        {chatArray.map((text)=><ChatBox id="yourChat" text={text}/>)}

        {/*
      <ChatBox id="myChat" text="ㅋㅋㅋㅋㅇㅋㅇㅋ" />

      <YourChat name={name} text="프랑스미학 재밋냐"/>

      <ChatBox id="myChat" text="오티는 미학 개괄만 했는디" />
      <ChatBox id="myChat" text="교수님 재밌음" />

      <YourChat name={name} text="흠..."/>
      <ChatBox id="yourChat" text="고민" />
      <ChatBox id="yourChat" text="안들을듯근데" />
      */}
      {/*
      <ChatBox id="myChat" text="듣자" />
      <ChatBox id="myChat" text="잼쓸듯" />
      */}
      <Input data={chatArray} setter={setChatArray}/>

    </div>
  );
}

export default App;
