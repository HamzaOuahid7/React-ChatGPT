import './App.css';
import './normal.css';
import ChatMessage from './component/ChatMessage'
import { useState } from "react";

function App() {
  const [input, setinput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user : "me",
      message : "hello"
    },{
    user : "gpt",
    message : "hello im a robbot "
  }]);
 
 async function HandelSubmit(e){
  e.preventDefault();
  let newChatLog =[...chatLog,{user:"me",message :`${input}`}] 
  setinput("");
  setChatLog(newChatLog)
  const messages = newChatLog.map((message)=>message.message).join("\n")
      const response = await fetch("http://localhost:4000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message:messages })
      });
      const data = await response.json();
      setChatLog([...newChatLog,{user:"gpt",message :`${data.message}`}])
      
 }

 function NewChat(){
 setChatLog([]); 
 }
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button" onClick={NewChat}>
          <span>+</span>
          new chat
        </div>
      </aside> 
      <section className="chatbox">
        <div className="chat-log">
          {chatLog.map((message,index) => (
          < ChatMessage key = {index}  message = {message}/>))} 
        </div>
        <div className="chat-input-holder">
          <form onSubmit={HandelSubmit}>
          <input rows="1"
          value={input}
          onChange={ (e)=> setinput(e.target.value)}
           className="chat-input-textarea"></input>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
