import React, { useState } from 'react';

// Hardcoded transaction data (replace with actual data)
const initialTransactionData = [
    { id: "1", type: "Buy", amount: 2.5, currency: "BTC", recipient: "John Doe", price_per_unit: 40000 },
    { id: "2", type: "Sell", amount: 1.8, currency: "ETH", recipient: "John Doe",  price_per_unit: 3000 },
    { id: "3", type: "Send", amount: 0.5, currency: "BTC", recipient: "John Doe", price_per_unit: 40000 }
];

const AITransactionReport: React.FC = () => {
    const [transactionData, setTransactionData] = useState(initialTransactionData);
    const [totalProfitLoss, setTotalProfitLoss] = useState(0);
    const [showBlockchain, setShowBlockchain] = useState(false);

    // Function to calculate total profit/loss
    const calculateProfitLoss = (transactions: any[]) => {
        let totalProfitLoss = 0;
        transactions.forEach(transaction => {
            if (transaction.type === 'Buy') {
                totalProfitLoss -= transaction.amount * transaction.price_per_unit;
            } else if (transaction.type === 'Sell') {
                totalProfitLoss += transaction.amount * transaction.price_per_unit;
            }
        });
        return totalProfitLoss;
    };

    // Function to generate report
    const generateReport = () => {
        const transactionTable = document.getElementById("transactionTable");
        if (transactionTable) {
            transactionTable.style.display = "table";
        }
        const profitLoss = calculateProfitLoss(transactionData);
        setTotalProfitLoss(profitLoss);
    };

    // Function to simulate fetching blockchain and ledger data
    const fetchBlockchainData = () => {
        // Simulate fetching blockchain and ledger data
        setTimeout(() => {
            setShowBlockchain(true);
        }, 1000);
    };

    return (
        <div>
            <h1>AI Transaction Report</h1>
            <button onClick={generateReport}>Generate Report</button>
            <table id="transactionTable" style={{ display: "none" }}>
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Recipient</th>
                        <th>Price per Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionData.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.currency}</td>
                            <td>{transaction.recipient || '-'}</td>
                            <td>{transaction.price_per_unit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total Profit/Loss: {totalProfitLoss}</p>

            {/* Button to fetch blockchain and ledger data */}
            {!showBlockchain && (
                <button onClick={fetchBlockchainData}>Show Blockchain and Ledger</button>
            )}

            {/* Display blockchain and ledger data */}
            {showBlockchain && (
                <div>
                    <h2>Blockchain Details</h2>
                    {/* Add hardcoded blockchain and ledger details here */}
                    <p>Blockchain Hash: 0x123abc</p>
                    <p>Block Height: 1000</p>
                    <p>Timestamp: 2024-24-03 12:00:00</p>
                    <p>...</p>
                    <h2>Ledger Details</h2>
                    {/* Add hardcoded ledger details here */}
                    <p>Transaction ID: 793331764097</p>
                    <p>Sender: John Doe</p>
                    <p>Recipient: Michael White</p>
                    <p>Amount: 1.0 BTC</p>
                    <p>...</p>
                </div>
            )}
        </div>
    );
};

export default AITransactionReport;
