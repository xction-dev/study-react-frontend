import { useState, useEffect } from "react";
import "./App.css";
import "./components/ChatComponents.css";
import ChatRoom from "./components/ChatRoom";
import TopBar from "./components/TopBar";
import dummy from "./data/dummy.json";

// interface ChatRoom {
//     id: number;
//     to: string;
//     chatData: { isMe: boolean; text: string }[];
//   }

function App() {
  const [currentTap, setCurrentTap] = useState(-1);
  const dummyRooms = Object.values(dummy); // array에 json 객체를 하나씩 저장. 이걸 useState로 돌리는 방법도 생각해야 함.
  const [chatRooms, setChatRooms] = useState(dummyRooms as any);

  const addMessageToChatRooms = (
    roomId: number,
    isMine: boolean,
    content: string
  ) => {
    setChatRooms((prevChatRooms) => {
      const updatedChatRooms = prevChatRooms.map((room) => {
        if (room.id === roomId) {
          return {
            ...room,
            chatData: [
              ...room.chatData,
              {
                id: Date.now(),
                isMine: isMine,
                content: content,
              },
            ],
          };
        } else {
          return room;
        }
      });
      return updatedChatRooms;
    });
  };

  const addNewChatRoom = () => {
    const newChatRoom = {
      id: chatRooms.length + 1,
      to: "New Chat Room",
      chatData: [],
    };
    setChatRooms([...chatRooms, newChatRoom]);
  };

  console.log(chatRooms); // 요런 식으로 써볼 수 있겠는데...

  // useEffect(() => {
  //   // console.log(roomsArray);
  //   chatRooms.forEach((room) => {
  //     setChatRooms((prevChatRooms) => [...prevChatRooms, room.to]);
  //   });
  //   // console.log(chatRooms);
  // }, []);

  return (
    <div className="container">
      <TopBar />
      {currentTap === -1 && (
        <div className="FirstPage">
          <ul className="ChatList">
            {chatRooms.map((room) => (
              <li
                className="ChatPreview"
                onClick={() => {
                  setCurrentTap(room.id);
                }}
              >
                {room.to}
              </li>
            ))}
          </ul>
          <button onClick={addNewChatRoom}>New Chat</button>
        </div>
      )}

      {chatRooms.map((room) => {
        const roomId = room.id;
        return (
          currentTap === roomId && (
            <ChatRoom
              title={room.to}
              id={room.id}
              chatData={room.chatData}
              addMessage={addMessageToChatRooms}
            />
          )
        );
      })}
    </div>
  );
}

export default App;
