import React, { useEffect } from 'react';

const FraudDetection: React.FC = () => {
    useEffect(() => {
        // Hardcoded transaction data for demonstration
        const transactionData = [
            { id: "1", type: "Buy", amount: 2.5, currency: "BTC", recipient: "User123", analysis: "No fraud detected" },
            { id: "2", type: "Sell", amount: 1.8, currency: "ETH", analysis: "No fraud detected" },
            { id: "3", type: "Send", amount: 0.5, currency: "BTC", recipient: "User456", analysis: "Suspicious activity detected" }
        ];

        const populateTable = () => {
            const table = document.getElementById('transactionTable') as HTMLTableElement;

            if (table) {
                transactionData.forEach(transaction => {
                    const row = table.insertRow();
                    row.insertCell().textContent = transaction.id;
                    row.insertCell().textContent = transaction.type;
                    row.insertCell().textContent = transaction.amount.toString();
                    row.insertCell().textContent = transaction.currency;
                    row.insertCell().textContent = transaction.recipient || '-';
                    row.insertCell().textContent = transaction.analysis;
                });
            }
        };

        populateTable();
    }, []);

    return (
        <div>
            <h1>Fraud Detection</h1>
            <p>Below is the analysis of the linked account for potential fraudulent activities:</p>
            <table id="transactionTable">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                        <th>Recipient</th>
                        <th>Analysis</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
};

export default FraudDetection;

