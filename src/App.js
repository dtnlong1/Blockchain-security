import React, { useState } from "react";

import LogoutButton from "./LogoutButton";
import LoginForm from "./pages/LogInForm";
import TransactionForm from "./pages/TransactionForm"; // Import the new component
import "./App.css";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [showTransactionForm, setShowTransactionForm] = useState(false);

	const handleLogin = (username) => {
		console.log(`User ${username} logged in`);
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		console.log("User logged out");
		setIsLoggedIn(false);
		setShowTransactionForm(false); // Hide transaction form on logout
	};

	const handleSendTransaction = (transactionData) => {
		// Simulate a fingerprint verification
		const isFingerprintVerified = window.confirm(
			"Press OK to verify transaction with your fingerprint."
		);
		if (isFingerprintVerified) {
			console.log(`Transaction verified and sent:`, transactionData);
			// Proceed with the transaction...
		} else {
			console.log("Transaction cancelled.");
		}
	};
	return (
		<div className="App">
			{isLoggedIn ? (
				<>
					<div className="logout-wrapper">
						<LogoutButton onLogout={handleLogout} />
					</div>
					<button onClick={() => setShowTransactionForm(true)}>
						Make Transaction
					</button>
					{showTransactionForm && (
						<TransactionForm onSendTransaction={handleSendTransaction} />
					)}
				</>
			) : (
				<LoginForm onLogin={handleLogin} />
			)}
		</div>
	);
}

export default App;
