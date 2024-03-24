import React, { useState } from "react";

function TransactionForm({ onSendTransaction }) {
    const [showPopup, setShowPopup] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [cryptoType, setCryptoType] = useState("BTC");
    const [cryptoAddress, setCryptoAddress] = useState("");
    const [cryptoAmount, setCryptoAmount] = useState("");
    const [passcode, setPasscode] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showUpdatedDetails, setShowUpdatedDetails] = useState(false);
    const [updatedAmount, setUpdatedAmount] = useState(""); // State to hold updated amount

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowPopup(true); // Show the popup while waiting for authentication
        // Here you would typically send the transaction data to the hardware device for authentication
        // For the sake of this example, let's assume the transaction is authenticated after inputting a passcode
    };

    const handleAuthenticate = () => {
        // In a real scenario, this function would send a request to the hardware device for authentication
        // For this example, let's assume the passcode "1234" authenticates the transaction
        if (passcode === "1234" || passcode === "X.}3HUz%1cC6}HU4et8+") {
            setIsAuthenticated(true);
            setSuccessMessage("Authentication Validated! Successful Transaction!");
            setShowPopup(false);
        }
    };

    const handleReportClick = () => {
        setShowUpdatedDetails(true); // Show updated details after clicking "Updated Report"
    };

    // Function to update ledger and blockchain
    const updateLedgerAndBlockchain = () => {
        // Simulate updating ledger and blockchain with the new transaction details
        // Assume the user sent 0.5 BTC
        const updatedAmountBTC = 0.5; // New BTC amount sent
        const updatedLedgerEntry = {
            transactionID: "newTransactionID",
            sender: "John Doe",
            recipient: "Michael White",
            amount: updatedAmountBTC, // Set to the new BTC amount
        };

        // Update the state with the new BTC amount
        setUpdatedAmount(updatedAmountBTC);
        // Set the updated details to be displayed
        setShowUpdatedDetails(true);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Send Cryptocurrency</h2>
                <select value={cryptoType} onChange={(e) => setCryptoType(e.target.value)}>
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="LTC">Litecoin (LTC)</option>
                    {/* Add more options for other cryptocurrencies */}
                </select>
                <input
                    type="text"
                    value={cryptoAddress}
                    onChange={(e) => setCryptoAddress(e.target.value)}
                    placeholder={`${cryptoType} Address`}
                    required
                />
                <input
                    type="number"
                    value={cryptoAmount}
                    onChange={(e) => setCryptoAmount(e.target.value)}
                    placeholder={`${cryptoType} Amount`}
                    required
                />
                <button type="submit">Send {cryptoType}</button>
            </form>
            {/* Popup for waiting for transaction authentication */}
            {showPopup && (
                <div className="popup">
                    <p>Waiting for transaction authentication...</p>
                    <input
                        type="password"
                        placeholder="Enter Passcode"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                    />
                    <button onClick={handleAuthenticate}>Input Passcode</button>
                </div>
            )}
            {/* Transaction Validation message */}
            {isAuthenticated && (
                <div className="transaction-validation">
                    <h3>Transaction Validation</h3>
                    <p>{successMessage}</p>
                    <button onClick={updateLedgerAndBlockchain}>Updated Report</button>
                </div>
            )}
            {/* Updated ledger and blockchain details */}
            {showUpdatedDetails && (
                <div>
                    <h3>Updated Ledger and Blockchain Details</h3>
                    <p>Blockchain Hash: 0x123abc</p>
                    <p>Block Height: 1000</p>
                    <p>Timestamp: 2024-24-03 12:00:00</p>
                    <p>New Transaction Sent: {updatedAmount} BTC</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    );
}

export default TransactionForm;
