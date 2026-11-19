
import { useState } from "react";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  function post() {
    if (!text.trim()) return;
    setComments([...comments, { text, likes: 0 }]);
    setText("");
  }

  function like(i) {
    setComments(comments.map((c, index) =>
      index === i ? { ...c, likes: c.likes + 1 } : c
    ));
  }

  return (
    <div className="container">
      <h2>Comments ({comments.length})</h2>

      <input value={text} placeholder="Write a comment..."
        onChange={(e) => setText(e.target.value)} />
      <button onClick={post}>Post</button>

      {comments.map((c, i) => (
        <div className="comment" key={i}>
          <b>You</b>
          <p>{c.text}</p>
          <button onClick={() => like(i)}>❤️ {c.likes}</button>
        </div>
      ))}
    </div>
  );
}

export default App;
