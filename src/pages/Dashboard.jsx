import Profile from "./Profile.jsx"
import React from "react";
import "../css/style.css";

const properties = [
  {
    id: 1,
    status: "Available",
    image: "./img/photo-of-house-3555615 - Copy.jpg",
    type: "3 bedroom flat",
    price: "2 million naira",
    postal: "Hamed Agencies",
    address: "66, Titikokori",
    date: "12/12/24",
  },
  {
    id: 2,
    status: "Rented",
    image: "",
    type: "3 bedroom flat",
    price: "2 million naira",
    postal: "Hamed Agencies",
    address: "66, Titikokori",
    date: "12/12/24",
  },
  {
    id: 3,
    status: "Processing",
    image: "./img/OIP (3).jpg",
    type: "3 bedroom flat",
    price: "2 million naira",
    postal: "Hamed Agencies",
    address: "66, Titikokori",
    date: "12/12/24",
  },
  {
    id: 4,
    status: "Verified",
    image: "./img/OIP (5) - Copy.jpg",
    type: "3 bedroom flat",
    price: "2 million naira",
    postal: "Hamed Agencies",
    address: "66, Titikokori",
    date: "12/12/24",
  },
];

export function Sidebar() {
  return (
    <>
    <div className="sidebar">
      <h1 className="logo">Logo</h1>
      <nav>
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><link to="">Profile</link></li>
          <li><link to="#"></link></li>
          <li><a href="">Bookmarks</a></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <a href="./settings.html">Settings</a>
        <a href="#">Logout</a>
      </div>
    </div>
    </>
  );
}

export function PropertyCard({ property }) {
  return (
    <>
    <div className="property-card">
      <span className={`status-tag ${property.status.toLowerCase()}-tag`}>{property.status}</span>
      <img src={property.image} alt="Property" className="property-card img" />
      <div className="card-content">
        <p className="property-type">{property.type}</p>
        <p className="price">{property.price}</p>
        <p>{property.postal}</p>
        <p>{property.address}</p>
        <button>Watch Video</button>
        <p className="date">Date: {property.date}</p>
      </div>
    </div>
    </>
  );
}

export function Dashboard() {
  return (
    <>
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <div className="header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Hawwal</p>
          </div>
          <div className="profile-info">
            <img src="./img/R.jpg" alt="Profile" />
            <span>ijoolahawwal@gmail.com</span>
          </div>
        </div>
        <div className="property-list">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
