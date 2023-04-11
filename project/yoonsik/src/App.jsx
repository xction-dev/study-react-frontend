import React, { useRef, useState } from "react";
import Header from "./component/Header/Header";
import Chat from "./component/Chat/Chat";
import InputBox from "./component/InputBox/InputBox";


function App() {
  const [inputs, setInputs] = useState({content: ''});
  const { content } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [chats, setChats] = useState([
    {
        id: 0,
        isMine: true,
        content: '수업 끝남?'
        
    },
    {
        id: 1,
        isMine: true,
        content: '바로 설입감?'
    },
    {
        id: 2,
        isMine: false,
        content: 'ㅇㅇ 끝남'
    },
    {
      id: 3,
      isMine: false,
      content: '도서관 있다가'
    },
    {
      id: 4,
      isMine: false,
      content: '갈거 같은디'
    },
    {
      id: 5,
      isMine: true,
      content: '나 사라진데'
    },
    {
      id: 6,
      isMine: true,
      content: '사라지 오셈'
    },
    {
      id: 7,
      isMine: false,
      content: '콘센트 있음?'
    },
    {
      id: 8,
      isMine: true,
      content: 'ㅇㅇ'
    }
]);

  const nextId = useRef(9);
  const onCreate = () => {
    const newChat = {
      id: nextId.current,
      isMine: true,
      content
    };
    setChats([...chats,newChat]);

    setInputs({ content: '' });
    nextId.current += 1;
  };
  
  const onRemove = id => {
    setChats(chats.filter(newChat => newChat.id !==id));
  };

  return (
    <div className="container">
      <Header />
      <Chat chats={chats} onRemove={onRemove} />
      <InputBox content={content} onChange={onChange} onCreate={onCreate}  />
    </div>
  );
}

export default App;