import React, { useState, useEffect } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLinkedMessage, setShowLinkedMessage] = useState(false);

  useEffect(() => {
    let timer;
    if (showLinkedMessage) {
      timer = setTimeout(() => {
        setShowLinkedMessage(false);
      }, 5000); // Hide message after 5 seconds
    }
    return () => clearTimeout(timer); // Clear the timer on unmount
  }, [showLinkedMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {/* Display the message if showLinkedMessage is true */}
      {showLinkedMessage && <p>Account Linked!</p>}
    </div>
  );
}

export default LoginForm;

