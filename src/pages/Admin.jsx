import { useState } from "react";

export default function Admin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, password }),
    });

    const data = await res.json();

    if (data.success) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid ID or Password");
    }
  };

  if (!loggedIn) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", backgroundColor: "#f4f6f8" }}
      >
        <div
          className="p-4 shadow rounded"
          style={{ width: "100%", maxWidth: "400px", backgroundColor: "#fff" }}
        >
          <h2 className="mb-4 text-center">Admin Login</h2>
          {error && (
            <p className="text-danger text-center mb-3">{error}</p>
          )}

          <input
            className="form-control mb-3"
            placeholder="Admin ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="btn btn-primary w-100"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f4f6f8" }}
    >
      <div className="text-center p-4 shadow rounded" style={{ backgroundColor: "#fff" }}>
        <h2>Download Leads Excel</h2>
        <a href="http://localhost:5000/api/download-leads">
          <button className="btn btn-success mt-3">Download Excel</button>
        </a>
      </div>
    </div>
  );
}
