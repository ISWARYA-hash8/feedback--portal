import { useState } from "react";

export default function FeedbackForm({ fetchFeedbacks }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    setText("");
    fetchFeedbacks(); // Refresh list
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea value={text} onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded mb-2" placeholder="Enter your feedback..." />
      <button className="bg-purple-600 text-white px-4 py-2 rounded">Submit Feedback</button>
    </form>
  );
}
