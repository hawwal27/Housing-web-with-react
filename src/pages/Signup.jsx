import { useState } from "react";
import "../css/Signup.css";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Form submitted", { email, password, agreedToTerms });
  };

  return (
    <>
    <div className="container">
      <a href="./index.html" className="back-button">← Back</a>
      <div className="form-card">
        <h2>Connect</h2>
        <h3>Create account</h3>
        <p>We would love you to join us from today!</p>
        <form id="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            id="confirm-pass"
            placeholder="Confirm Password"
            required
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              id="agreedToTerms"
              required
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            I agree to the Terms and Conditions
          </label>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-button">Sign up</button>
        </form>
      </div>
    </div>
    </>
  );
}
