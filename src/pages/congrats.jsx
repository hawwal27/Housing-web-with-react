import React from "react";
import "../css/congrats.css";


export function CongratulationPage  () {
    return (
        <>
      <div className="container">
        <h1>🎉 Congratulations! 🎉</h1>
        <p>Your email has been successfully verified, and your registration is complete.</p>
        <p>Thank you for joining us! You can now access your dashboard and explore all the features we have to offer.</p>
        <a href="./login.html">Login</a>
      </div>
      </>
    );
  };
  
  export default CongratulationPage;
  