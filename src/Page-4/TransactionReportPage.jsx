import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

function TransactionReportPage({ ledgerData, blockchainData }) {
  return (
    <div>
      <h1>Transaction Report</h1>
      <h2>Ledger Details</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {ledgerData.map((entry) => (
            <tr key={entry.transactionID}>
              <td>{entry.transactionID}</td>
              <td>{entry.sender}</td>
              <td>{entry.recipient}</td>
              <td>{entry.amount}</td>
              <td>{entry.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Blockchain Details</h2>
      <p>Blockchain Hash: {blockchainData.hash}</p>
      <p>Block Height: {blockchainData.blockHeight}</p>
      <p>Timestamp: {blockchainData.timestamp}</p>
      {/* Add more blockchain details as needed */}
      {/* Add button to navigate to AI-Gen-Rep.tsx */}
      <Link to="/AI-Gen-Rep">
        <button>Generate Updated Report</button>
      </Link>
    </div>
  );
}

export default TransactionReportPage;
