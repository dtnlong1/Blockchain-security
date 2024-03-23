// TransactionForm.js
import React, { useState } from "react";

function TransactionForm({ onSendTransaction }) {
	const [fromAddress, setFromAddress] = useState("");
	const [recipient, setRecipient] = useState("");
	const [amount, setAmount] = useState("");
	const [gasLimit, setGasLimit] = useState("");
	const [gasPrice, setGasPrice] = useState("");
	const [nonce, setNonce] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can now include these new data in your transaction submission
		onSendTransaction({
			fromAddress,
			recipient,
			amount,
			gasLimit,
			gasPrice,
			nonce,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Make a Transaction</h2>
			{/* Add input fields for each new piece of data */}
			<input
				type="text"
				value={fromAddress}
				onChange={(e) => setFromAddress(e.target.value)}
				placeholder="From Address"
				required
			/>
			<input
				type="text"
				value={recipient}
				onChange={(e) => setRecipient(e.target.value)}
				placeholder="Recipient Address"
				required
			/>
			<input
				type="number"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
				placeholder="Amount"
				required
			/>
			<input
				type="number"
				value={gasLimit}
				onChange={(e) => setGasLimit(e.target.value)}
				placeholder="Gas Limit"
				required
			/>
			<input
				type="number"
				value={gasPrice}
				onChange={(e) => setGasPrice(e.target.value)}
				placeholder="Gas Price"
				required
			/>
			<input
				type="number"
				value={nonce}
				onChange={(e) => setNonce(e.target.value)}
				placeholder="Nonce"
				required
			/>
			<button type="submit">Send Transaction</button>
		</form>
	);
}

export default TransactionForm;
