import React from "react";

function NavigationBar({ onLogout }) {
	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "space-between",
				padding: "10px",
				backgroundColor: "#333",
				color: "#fff",
			}}>
			<span style={{ fontWeight: "bold" }}>CryptoWallet</span>
			<button
				onClick={onLogout}
				className="button-odd"
				style={{
					background: "none",
					color: "#fff",
					border: "1px solid #fff",
					borderRadius: "5px",
					padding: "5px 10px",
				}}>
				Logout
			</button>
			<div className="navbar-links">
				<a href="#dashboard">Dashboard</a>
				<a href="#transactions">Transactions</a>
				<a href="#send">Send Crypto</a>
				<a href="#receive">Receive Crypto</a>
				<a href="#settings">Settings</a>
			</div>
		</nav>
	);
}

export default NavigationBar;
