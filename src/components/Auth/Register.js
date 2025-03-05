import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { useState } from "react";
import { postRegister } from "../../services/apiService";
import { toast } from "react-toastify";
function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleEye = () => {
    setShowPassword((show) => !show);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitRegisterUsers = async () => {
    const isValidateEmail = validateEmail(email);
    //validate
    if (!isValidateEmail) {
      toast.error("invalid email!");
      return;
    }
    if (!password) {
      toast.error("invalid password!");
      return;
    }
    let data = await postRegister(email, password, username);

    if (data && data.EC === 0) {
      toast.success("Register user success");
      navigate("/login");

      // await props.fetchListUser();
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="register-container">
      <div className="header">
        Already have an account{" "}
        <button onClick={() => handleLogin()}>Log in</button>
      </div>
      <div className="title">Under</div>
      <div className="start">Start your journey?</div>
      <div className="content-form">
        <div className="form-group">
          <label>Email (*)</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password (*)</label>

          <i
            className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
            onClick={() => handleEye()}
          />
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => handleSubmitRegisterUsers()}>
            Create my free account
          </button>
        </div>
        <div className="back">
          <span onClick={() => navigate("/")}>&#60;&#60; Go to HomePage</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
