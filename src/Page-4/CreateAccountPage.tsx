import React, { useState } from "react";

interface CreateAccountProps {
  onFinish: () => void;
}

const CreateAccount: React.FC<CreateAccountProps> = ({ onFinish }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    driverLicenseId: "",
    passportNumber: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    platform: "",
    passkey: "",
    showLinkedMessage: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      setFormData((prevData) => ({
        ...prevData,
        showLinkedMessage: true,
      }));
      setTimeout(() => {
        onFinish(); // Navigate to login page after 3 seconds
      }, 3000); // 3 seconds total wait time
    }, 5000); // Show "Account Linked!" message after 5 seconds
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for personal information */}
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />

        <label htmlFor="driverLicenseId">Driver's License ID:</label>
        <input type="text" id="driverLicenseId" name="driverLicenseId" value={formData.driverLicenseId} onChange={handleChange} />

        <label htmlFor="passportNumber">Passport Number:</label>
        <input type="text" id="passportNumber" name="passportNumber" value={formData.passportNumber} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />

        {/* Input fields for account credentials */}
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

        {/* Dropdown menu for platform selection */}
        <label htmlFor="platform">Choose a platform:</label>
        <select id="platform" name="platform" value={formData.platform} onChange={handleChange}>
          <option value="">Select a platform</option>
          <option value="coinbase">Coinbase</option>
          <option value="binance">Binance</option>
          <option value="kraken">Kraken</option>
          <option value="gemini">Gemini</option>
          {/* Add more options for other platforms */}
        </select>

        {/* Conditionally render passkey input section if platform is Coinbase */}
        {formData.platform === "coinbase" && (
          <div>
            <label htmlFor="passkey">Enter Passkey:</label>
            <input type="password" id="passkey" name="passkey" value={formData.passkey} onChange={handleChange} />
          </div>
        )}

        <button type="submit">Continue</button>
      </form>
      {/* Show success message if passkey is entered for Coinbase */}
      {formData.showLinkedMessage && (
        <div>
          <p>Account Linked!</p>
        </div>
      )}
    </div>
  );
}

export default CreateAccount;
