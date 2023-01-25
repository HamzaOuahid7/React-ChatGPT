import React from "react";
const ChatMessage = ({message}) => {
    return (
        <div className={`chat-message ${message.user === "gpt" &&  "chatgpt"}`} >
            <div className="chat-massage-center">
                <div className={`avatar ${message.user === "gpt" &&  "chatgpt"}`}>
                </div>
                <div className="message">
                    {message.message}
                </div>
            </div>
        </div> );};
 export default ChatMessage 