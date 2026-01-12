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

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
