import { useEffect, useState } from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



const ws = new WebSocket("ws://localhost:3000/cable");

function App() {
  const [messages, setMessages] = useState([]);
  const [guid, setGuid] = useState("");
  const messagesContainer = document.getElementById("messages");

  ws.onopen = () => {
    console.log("Connected to websocket server");
    setGuid(Math.floor(Math.random() * 1e13).toString());

  ws.send(
    JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          id: guid,
          channel: "MessagesChannel",
        }),
      })
    );
  };

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.type === "ping") return;
    if (data.type === "welcome") return;
    if (data.type === "confirm_subscription") return;

    const message = data.message;
    setMessagesAndScrollDown([...messages, message]);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    resetScroll();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = e.target.message.value;
    const timestamp = new Date().toISOString();
    e.target.message.value = "";

    await fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body, timestamp }),
    });
  };

  const fetchMessages = async () => {
    const response = await fetch("http://localhost:3000/messages");
    const data = await response.json();
    setMessagesAndScrollDown(data);
  }

  const setMessagesAndScrollDown = (data) => {
    setMessages(data);
    resetScroll();
  };

  const resetScroll = () => {
    if (!messagesContainer) return;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  return (
    <div className="App">
      <div className="messageHeader">
        <h1 className="title">Live Chat Messages</h1>
        <p>Member ID: {guid}</p>
      </div>
      <div className="messages" id="messages">
        {messages.map((message) => (
          <div className={`message ${message.sender}`} key={message.id}>
            <div className="chat-container">
              <div className="chat-bubble">
                <p className="message-body">{message.body}</p>
                <p className="message-timestamp">{message.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="messageForm">
        <form onSubmit={handleSubmit} className="formContainer">
          <input
            className="messageInput"
            type="text"
            name="message"
            placeholder="Type your message..."
          />
          <button className="messageButton" type="submit">
            <i className="fas fa-paper-plane"></i> Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App
