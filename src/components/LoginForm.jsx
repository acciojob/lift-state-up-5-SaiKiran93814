import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      onLogin(); // Update parent state
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold">Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="border p-2 w-full"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="border p-2 w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
