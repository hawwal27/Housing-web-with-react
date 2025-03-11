import {link} from "react-router-dom";
import "../css/Login.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", { email, password });
  };

  return (
    <>
    <div className="container">
      <a href="./index.html" className="back-button">← Back</a>
      <div className="form-card">
        <h2>Connect</h2>
        <h3>Login</h3>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="icon">👤</span>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="icon">🔒</span>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button"><link to="/Dashboard">Login</link></button>
        </form>
      </div>
    </div>
    </>
  );
}
