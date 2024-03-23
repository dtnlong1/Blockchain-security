import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import LoginForm from "./LogInForm";
import "./App.css";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = (username) => {
		console.log(`User ${username} logged in`); // Handle the login logic here
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		console.log("User logged out"); // Handle the logout logic here
		setIsLoggedIn(false);
	};

	return (
		<div className="App">
			{isLoggedIn ? (
				<LogoutButton onLogout={handleLogout} />
			) : (
				<LoginForm onLogin={handleLogin} />
			)}
		</div>
	);
}

export default App;
