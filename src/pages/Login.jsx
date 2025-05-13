import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "shivaprasad@123" && password === "prasad_@045") {
      login(); // Set auth state to true
      navigate("/");
    } else {
      alert("Invalid email or password. Use the demo credentials shown below.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-3">Login</h2>

        <p className="text-muted small">
          <strong>Demo credentials:</strong><br />
          Email: <code>shivaprasad@123</code><br />
          Password: <code>prasad_@045</code>
        </p>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="btn btn-dark w-100">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
