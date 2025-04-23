import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I’m your canteen assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/openai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { from: "bot", text: data.reply }]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Sorry, I could not process your request." }
      ]);
    }
    setInput("");
    setLoading(false);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`msg ${msg.from}`}>{msg.text}</div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading || !input.trim()}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;