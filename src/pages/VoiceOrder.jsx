import React, { useState, useRef } from "react";
import "./VoiceOrder.css";

const VoiceOrder = () => {
  const [order, setOrder] = useState("");
  const [recording, setRecording] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice recognition not supported");
      return;
    }
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.onresult = (event) => {
      setOrder(event.results[0][0].transcript);
      setRecording(false);
    };
    recognitionRef.current.onend = () => setRecording(false);
    recognitionRef.current.start();
    setRecording(true);
  };

  return (
    <div className="voice-order">
      <h2>Voice Order</h2>
      <button onClick={startListening} disabled={recording}>
        {recording ? "Listening..." : "Start Voice Order"}
      </button>
      <div className="order-text">{order && <p>Your Order: {order}</p>}</div>
    </div>
  );
};

export default VoiceOrder;