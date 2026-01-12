import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import ExcelJS from "exceljs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const FILE_PATH = path.join(__dirname, "leads.xlsx");

const ADMIN_ID = "KrishnaGana@12";
const ADMIN_PASS = "Muddukrishna@12";

app.post("/api/admin-login", (req, res) => {
  const { id, password } = req.body;

  if (id === ADMIN_ID && password === ADMIN_PASS) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.get("/api/download-leads", (req, res) => {
  if (!fs.existsSync(FILE_PATH)) return res.status(404).send("No file found");
  res.download(FILE_PATH, "leads.xlsx");
});

// Save lead data to Excel file
app.post("/api/save-lead", async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    // Validate required fields
    if (!name || !email || !interest || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }

    let workbook;
    let worksheet;

    // Check if file exists
    if (fs.existsSync(FILE_PATH)) {
      // Read existing workbook
      workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile(FILE_PATH);
      worksheet = workbook.getWorksheet("Leads") || workbook.addWorksheet("Leads");
    } else {
      // Create new workbook
      workbook = new ExcelJS.Workbook();
      worksheet = workbook.addWorksheet("Leads");

      // Add headers
      worksheet.columns = [
        { header: "Timestamp", key: "timestamp", width: 20 },
        { header: "Name", key: "name", width: 25 },
        { header: "Email", key: "email", width: 30 },
        { header: "Phone", key: "phone", width: 15 },
        { header: "Interest", key: "interest", width: 20 },
        { header: "Message", key: "message", width: 50 }
      ];
    }

    // Add new row
    worksheet.addRow({
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name,
      email,
      phone: phone || "N/A",
      interest,
      message
    });

    // Save workbook
    await workbook.xlsx.writeFile(FILE_PATH);

    console.log("Lead saved:", { name, email, interest });

    res.json({
      success: true,
      message: "Your message has been received! We will get back to you within 24 hours."
    });

  } catch (error) {
    console.error("Error saving lead:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred. Please try again."
    });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
