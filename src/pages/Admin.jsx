import { useState } from "react";
import * as XLSX from "xlsx";

const ADMIN_ID = "KrishnaGana@12";
const ADMIN_PASS = "Muddukrishna@12";

export default function Admin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (id === ADMIN_ID && password === ADMIN_PASS) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid ID or Password");
    }
  };

  const handleDownloadExcel = () => {
    try {
      // Get leads from localStorage
      const leads = JSON.parse(localStorage.getItem("leads") || "[]");

      if (leads.length === 0) {
        alert("No leads data available to download.");
        return;
      }

      // Prepare data for Excel
      const worksheetData = leads.map(lead => ({
        Timestamp: lead.timestamp,
        Name: lead.name,
        Email: lead.email,
        Phone: lead.phone,
        Interest: lead.interest,
        Message: lead.message
      }));

      // Create workbook and worksheet
      const worksheet = XLSX.utils.json_to_sheet(worksheetData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");

      // Set column widths
      worksheet["!cols"] = [
        { wch: 20 }, // Timestamp
        { wch: 25 }, // Name
        { wch: 30 }, // Email
        { wch: 15 }, // Phone
        { wch: 20 }, // Interest
        { wch: 50 }  // Message
      ];

      // Download the file
      XLSX.writeFile(workbook, "leads.xlsx");
    } catch (error) {
      console.error("Error downloading Excel:", error);
      alert("Failed to download Excel file. Please try again.");
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
        <button className="btn btn-success mt-3" onClick={handleDownloadExcel}>
          Download Excel
        </button>
      </div>
    </div>
  );
}
