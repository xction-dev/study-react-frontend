<<<<<<< HEAD
import "./App.css";
import Inputs from "./component/Inputs";


function App() {
    return (
        <div className="App">
           <Inputs/>
        </div>
    )
=======
import Component1 from "./component/Component1";
import "./App.css";
import { useState } from "react";

function Component2(){
  return (<div>채팅 3</div>)
}

function App() {
  // const variable = "바뀐 후";
  const [number, setNumber] = useState(0);
  console.log("test");

  return (

    <div className="chat-container">
      {/* <div>{variable}</div> */}
      {/* <div id="wantTochange"></div> */}
      
      <div>{number}</div>
      <button onClick={()=>{
        setNumber(number+1)
      }}>누르면 숫자 증가</button>
      <Component1 />
    </div>
    
  )
>>>>>>> a5a018e760efd6442a4cc757f2a94f724565051b
}

export default App
