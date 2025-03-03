import { useState } from "react";
import "./Login.scss";
import { AlertHeading } from "react-bootstrap";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    alert("vu");
  };
  return (
    <div className="login-container">
      <div className="header">Don't have account yet?</div>
      <div className="title">Under</div>
      <div className="welcome">Hello, who's this</div>
      <div className="content-form">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span>Forgot Password</span>
        <div>
          <button onClick={() => handleLogin()}>Login to Under</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
