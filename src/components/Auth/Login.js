import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    //validate

    //submit api
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      toast.success("Login success");
      navigate("/");
    }

    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have account yet?</span>
        <button>Sign up</button>
      </div>
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
        <div className="back">
          <span onClick={() => navigate("/")}>&#60;&#60; Go to HomePage </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
