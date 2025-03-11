import React, { useState } from "react";
import "../css/Profile.css";

 export function Sidebar () {
  return(
    <>
    <div className="sidebar">
    <div className="logo">Logo</div>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#" className="active">Profile</a></li>
        <li><a href="#">Notifications</a></li>
        <li><a href="#">Bookmarks</a></li>
      </ul>
    </nav>
    <div className="sidebar-footer">
      <a href="./settings.html">Settings</a>
      <a href="#">Logout</a>
    </div>
  </div>
    </>
  )
 }

export function ProfileCard () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <>
       <div className="profile-container">
      <div className="profile-card">
        <div className="profile-picture">
          <img src="./img/OIP (3).jpg" alt="Profile Picture" />
          <input type="file" id="upload-picture" className="upload-btn" />
        </div>

        <form className="profile-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Change Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">Change Email</label>
          <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="phone">Change Phone Number</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <div className="form-buttons">
            <button type="submit" className="save-btn">Save Changes</button>
            <button type="button" className="cancel-btn" onClick={() => { setName(""); setEmail(""); setPhone(""); }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
    </>
   );
};

export function ProfilePage () {
  return(
    <>
     <div className="dashboard">
    <Sidebar />
    <ProfileCard />
  </div>
    </>
  )
}

export default ProfilePage;
