
import React from "react";
import './../styles/App.css';

import LoginForm from "./LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="p-4 text-center">
      {isLoggedIn ? (
        <h2 className="text-green-600 text-2xl">Welcome! You are logged in.</h2>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App
