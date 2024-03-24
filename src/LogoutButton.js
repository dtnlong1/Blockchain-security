import React from "react";
import AITransactionReport from "./Page-4/AI-Gen-Rep";

function LogoutButton({ onLogout }) {
	return (
		<div>
			<AITransactionReport />

			<button onClick={onLogout}>Logout</button>
		</div>
	);
}

export default LogoutButton;
