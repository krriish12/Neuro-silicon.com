import { useState } from "react";
import * as XLSX from "xlsx";

export default function Admin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [leads, setLeads] = useState([]);

  // Fetch leads from localStorage
  const fetchLeads = () => {
    const localLeads = JSON.parse(localStorage.getItem("neuro-silicon-leads") || "[]");
    setLeads(localLeads);
  };

  const handleLogin = () => {
    // Simple local authentication
    if (id === "KrishnaGana@12" && password === "Muddukrishna@12") {
      setLoggedIn(true);
      setError("");
      fetchLeads();
    } else {
      setError("Invalid ID or Password");
    }
  };

  const handleDownloadJSON = () => {
    try {
      if (leads.length === 0) {
        alert("No leads data available to download.");
        return;
      }

      // Create JSON string with proper formatting
      const jsonStr = JSON.stringify(leads, null, 2);

      // Create blob and download
      const blob = new Blob([jsonStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `neuro-silicon-leads-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading JSON:", error);
      alert("Failed to download JSON file. Please try again.");
    }
  };

  const handleDownloadExcel = () => {
    try {
      if (leads.length === 0) {
        alert("No leads data available to download.");
        return;
      }

      // Prepare data for Excel
      const worksheetData = leads.map(lead => ({
        ID: lead.id,
        Type: lead.type,
        Timestamp: lead.formattedDate,
        Name: lead.name,
        Email: lead.email,
        Phone: lead.phone,
        "Course/Interest": lead.interest || lead.course || "N/A",
        Status: lead.status || "N/A",
        Message: lead.message
      }));

      // Create workbook and worksheet
      const worksheet = XLSX.utils.json_to_sheet(worksheetData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");

      // Set column widths
      worksheet["!cols"] = [
        { wch: 15 }, // ID
        { wch: 15 }, // Type
        { wch: 20 }, // Timestamp
        { wch: 25 }, // Name
        { wch: 30 }, // Email
        { wch: 15 }, // Phone
        { wch: 30 }, // Course/Interest
        { wch: 20 }, // Status
        { wch: 50 }  // Message
      ];

      // Download the file
      const fileName = `neuro-silicon-leads-${new Date().toISOString().split('T')[0]}.xlsx`;
      XLSX.writeFile(workbook, fileName);
    } catch (error) {
      console.error("Error downloading Excel:", error);
      alert("Failed to download Excel file. Please try again.");
    }
  };

  const handleDeleteLead = (leadId) => {
    if (!confirm("Are you sure you want to delete this lead?")) {
      return;
    }

    // Delete from localStorage
    const updatedLeads = leads.filter(lead => lead.id !== leadId);
    setLeads(updatedLeads);
    localStorage.setItem("neuro-silicon-leads", JSON.stringify(updatedLeads));
  };

  const handleClearAll = () => {
    if (!confirm("Are you sure you want to delete ALL leads? This action cannot be undone!")) {
      return;
    }

    localStorage.removeItem("neuro-silicon-leads");
    setLeads([]);
    alert("All leads have been deleted.");
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
            onKeyPress={(e) => e.key === "Enter" && handleLogin()}
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleLogin()}
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
    <div style={{ minHeight: "100vh", backgroundColor: "#f4f6f8", paddingTop: "100px", paddingBottom: "50px" }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h2>Leads Dashboard</h2>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-info" onClick={handleDownloadJSON}>
              <i className="bi bi-file-earmark-code me-2"></i>
              Download JSON
            </button>
            <button className="btn btn-success" onClick={handleDownloadExcel}>
              <i className="bi bi-file-earmark-excel me-2"></i>
              Download Excel
            </button>
            <button className="btn btn-primary" onClick={fetchLeads}>
              <i className="bi bi-arrow-clockwise me-2"></i>
              Refresh
            </button>
            <button className="btn btn-danger" onClick={handleClearAll}>
              <i className="bi bi-trash me-2"></i>
              Clear All
            </button>
          </div>
        </div>

        {leads.length === 0 ? (
          <div className="alert alert-info">
            No leads found. Leads will appear here after form submissions.
          </div>
        ) : (
          <div className="card shadow">
            <div className="card-body">
              <p className="mb-3">Total Leads: <strong>{leads.length}</strong></p>
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th>Type</th>
                      <th>Timestamp</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Course/Interest</th>
                      <th>Status</th>
                      <th>Message</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead.id}>
                        <td>
                          <span className={`badge ${lead.type === "Contact Form" ? "bg-primary" : "bg-success"}`}>
                            {lead.type}
                          </span>
                        </td>
                        <td style={{ fontSize: "0.85rem" }}>{lead.formattedDate}</td>
                        <td>{lead.name}</td>
                        <td>
                          <a href={`mailto:${lead.email}`}>{lead.email}</a>
                        </td>
                        <td>
                          {lead.phone !== "N/A" ? (
                            <a href={`tel:${lead.phone}`}>{lead.phone}</a>
                          ) : (
                            "N/A"
                          )}
                        </td>
                        <td>{lead.interest || lead.course || "N/A"}</td>
                        <td>{lead.status || "-"}</td>
                        <td style={{ maxWidth: "300px", whiteSpace: "normal" }}>
                          {lead.message}
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDeleteLead(lead.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
