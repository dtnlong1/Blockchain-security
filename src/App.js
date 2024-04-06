import React, { useState } from "react";
import AITransactionReport from "./Page-4/AI-Gen-Rep.tsx";
import LoginForm from "./LogInForm";
import CreateAccountPage from "./Page-4/CreateAccountPage.tsx";
import TransactionForm from "./Page-4/TransactionForm.js";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [showTransactionValidation, setShowTransactionValidation] = useState(false);
  const [isTransactionValid, setIsTransactionValid] = useState(false);

  const handleLogin = (username) => {
    console.log(`User ${username} logged in`);
    setIsLoggedIn(true);
  };

  const handleCreateAccount = () => {
    setShowCreateAccount(true);
  };

  const handleFinishAccountCreation = () => {
    setShowCreateAccount(false);
  };

  const handleShowTransactionForm = () => {
    setShowTransactionForm(true);
  };

  const handleSendTransaction = (transactionData) => {
    // Here you would implement the logic to validate the transaction
    // For now, let's assume the transaction is valid if all fields are filled
    const isValid = Object.values(transactionData).every((value) => value.trim() !== "");
    setIsTransactionValid(isValid);
    setShowTransactionValidation(true);
  };

  const handleTransactionValidationClose = () => {
    setShowTransactionValidation(false);
    if (isTransactionValid) {
      // Redirect user to AI Transaction Report page upon successful validation
    }
  };

  return (
    <div className="App" >
      {showCreateAccount ? (
        <CreateAccountPage onFinish={handleFinishAccountCreation} />
      ) : isLoggedIn ? (
        <div>
          <AITransactionReport />
          {showTransactionForm && (
            <TransactionForm onSendTransaction={handleSendTransaction} />
          )}
          {showTransactionValidation && (
            <div className="TransactionValidationPopup">
              <h3>Transaction Validation</h3>
              <p>{isTransactionValid ? "Transaction Validated Successfully!" : "Invalid Transaction Data"}</p>
              <button onClick={handleTransactionValidationClose}>Close</button>
            </div>
          )}
          {!showTransactionForm && (
            <button onClick={handleShowTransactionForm}>Next</button>
          )}
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      {!isLoggedIn && !showCreateAccount && (
        <button onClick={handleCreateAccount}>Create Account</button>
      )}
    </div>
  );
}

export default App;
