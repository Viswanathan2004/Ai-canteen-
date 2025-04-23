import React, { useState } from "react";
import "./DietAnalysis.css";

const DietAnalysis = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeDiet = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/diet/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ foodLog: input })
      });
      const data = await res.json();
      setResult(data.advice);
    } catch {
      setResult("Sorry, diet analysis is currently unavailable.");
    }
    setLoading(false);
  };

  return (
    <div className="diet-analysis">
      <h2>AI Diet Analysis</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe what you ate today..."
        rows={4}
      />
      <button onClick={analyzeDiet} disabled={!input.trim() || loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {result && <div className="analysis-result">{result}</div>}
    </div>
  );
};

export default DietAnalysis;