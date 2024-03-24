// WelcomePage.js
import React from "react";

interface WelcomePageProps {
  onCreateAccount: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onCreateAccount }) => {
  return (
    <div>
      <h1>Welcome!</h1>
      {/* Your image here */}
      <button onClick={onCreateAccount}>Create Account</button>
    </div>
  );
}

export default WelcomePage;

