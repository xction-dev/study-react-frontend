import { useState } from 'react';
import './App.css';
import { Header } from './component/Header/Header';
import { Chat } from './component/ChatList/ChatList';
import { InputForm } from './component/InputForm/InputForm';


function App() {


  return (
    <div>
      <Header name="Apple Store"></Header>
      <Chat name="chatbox"></Chat>
      <InputForm name="message-send"></InputForm>
    

    </div>
  )
}

export default App;
