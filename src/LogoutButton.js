import React from "react";

function LogoutButton({ onLogout }) {
	return (
		<div>
			<h2>Welcome!</h2>
			<button onClick={onLogout}>Logout</button>
		</div>
	);
}

export default LogoutButton;
