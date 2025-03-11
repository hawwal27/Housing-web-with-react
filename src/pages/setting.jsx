import React, { useState } from "react";
import "../css/setting.css";

export function Settings() {
  const [formData, setFormData] = useState({ password: "", email: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleResetPassword(e) {
    e.preventDefault();
    alert("Password reset request submitted.");
  }

  function handleDeleteAccount() {
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Account deletion request submitted.");
    }
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li><a href="./dashboard.html" className="active">Home</a></li>
            <li><a href="./profile.html">Profile</a></li>
            <li><a href="./Nofication.html">Notifications</a></li>
            <li><a href="#">Bookmarks</a></li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <a href="#" className="active">Settings</a>
          <a href="#">Logout</a>
        </div>
      </div>
      
      <div className="settings-container">
        <div className="settings-card">
          <h2>Settings</h2>
          <form onSubmit={handleResetPassword}>
            <label htmlFor="password">Reset Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
            />

            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <button type="submit" className="reset-btn">Reset Password</button>
            <button type="button" className="delete-btn" onClick={handleDeleteAccount}>Delete Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
