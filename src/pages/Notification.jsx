import React from "react";

const notifications = [
  { title: "New Property Added", message: "A new 3-bedroom flat has been listed for sale in Lagos.", timestamp: "12/12/24 - 10:00 AM" },
  { title: "Price Drop Alert", message: "The price of the 4-bedroom duplex has been reduced by 10%.", timestamp: "12/11/24 - 3:45 PM" },
  { title: "New Message", message: "You have received a message from Hamed Agencies.", timestamp: "12/10/24 - 2:30 PM" },
];

export function Sidebar ()  {
    return(
        <>
        <div className="sidebar">
    <div>
      <div className="logo">Logo</div>
      <nav>
        <ul>
          <li><a href="./dashboard.html" className="active">Home</a></li>
          <li><a href="./profile.html">Profile</a></li>
          <li><a href="#" className="active">Notifications</a></li>
          <li><a href="#">Bookmarks</a></li>
        </ul>
      </nav>
    </div>
    <div className="sidebar-footer">
      <a href="./setting.html">Settings</a>
      <a href="#">Logout</a>
    </div>
  </div>
        </>
    )
}

export function NotificationCard  ({ title, message, timestamp }){
    return(
        <>
        <div className="notification-card">
    <h3>{title}</h3>
    <p>{message} <span className="emoji">📩</span></p>
    <span className="timestamp">{timestamp}</span>
  </div>
        </>
    )
}


export  function Notifications  () {
    return(
        <>
        <div className="dashboard">
    <Sidebar />
    <div className="main-content">
      <header className="header">
        <h1>Notifications</h1>
        <p>Stay updated with the latest alerts.</p>
      </header>
      <div className="notification-list">
        {notifications.map((note, index) => (
          <NotificationCard key={index} {...note} />
        ))}
      </div>
    </div>
  </div>
        </>
    )
}
  
export default Notifications;
