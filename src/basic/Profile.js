import React, { useState } from "react";
import "./Profile.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the icons

export default function Profile() {
  const [name, setName] = useState("Ismail Thabet");
  const [password, setPassword] = useState("Blue jet");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("Tunis");
  const [profileImage, setProfileImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSaveChanges = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Logic to save changes to the server
    alert("Profile updated successfully!");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>

      <div className="profile-image">
        <img src={profileImage || "default-avatar.png"} alt="Profile" />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      <div className="profile-info">
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>

        <label className="password-label">
          Password:
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
            />
            <span className="password-toggle-icon" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </label>

        <label className="password-label">
          Confirm Password:
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <span className="password-toggle-icon" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </label>

        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>

        <button className="save-button" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
