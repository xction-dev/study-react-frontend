import {useState} from 'react';
import './App.css';
import "./components/ChatComponents.css";
import ChatRoom from "./components/ChatRoom";
import TopBar from "./components/TopBar";
import {chatData1, chatData2, chatData3} from "./data/chatData";

function App() {
    const [currentTap, setCurrentTap] = useState(0);
    return (<div className="container">
        <TopBar/>
        {currentTap === 0 && <ul className="ChatList">
            <li className="ChatPreview" onClick={()=>{
                setCurrentTap(1);
            }}>창인</li>
            <li className="ChatPreview"  onClick={()=>{
                setCurrentTap(2);
            }}>윤식</li>
            <li className="ChatPreview"  onClick={()=>{
                setCurrentTap(3);
            }}>피싱</li>
        </ul>}
        {currentTap === 1 && <ChatRoom title="창인" id={1} chatData={chatData1}/>}
        {currentTap === 2 && <ChatRoom title="윤식" id={2} chatData={chatData2}/>}
        {currentTap === 3 && <ChatRoom title="피싱" id={3} chatData={chatData3}/>}
    </div>)
}

export default App
