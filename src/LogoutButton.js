import React from "react";

function LogoutButton({ onLogout }) {
	return (
		<div>
			<button onClick={onLogout}>Logout</button>
		</div>
	);
}

export default LogoutButton;
