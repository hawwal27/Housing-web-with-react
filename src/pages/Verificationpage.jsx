import { useState } from "react";
import "../css/verificationpage.css";

export function VerificationPage  () {
  const [verificationCode, setVerificationCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verification Code Submitted:", verificationCode);
  };

  return (
    <>
    <div className="container">
      <div className="heading">Verify Your Email</div>
      <div className="subheading">
        Please enter the code sent to your email to continue creating your account.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="verification-code"> <span>Verification Code</span></label>
          <div className="verification">
            <input
              type="text"
              id="verification-code"
              placeholder="Enter the code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <button type="button" className="get-btn">Get Code</button>
          </div>
        </div>
        <button type="submit" className="btn">Continue</button>
      </form>
      <div className="footer">
        <p>Didn't get the code? | <a href="#">Contact Support</a></p>
      </div>
    </div>
    </>
  );
};

export default VerificationPage;
