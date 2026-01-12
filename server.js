import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ExcelJS from "exceljs";
import fs from "fs";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILE_PATH = "./leads.xlsx";

app.post("/api/save-lead", async (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    const workbook = new ExcelJS.Workbook();
    let worksheet;

    if (fs.existsSync(FILE_PATH)) {
      await workbook.xlsx.readFile(FILE_PATH);
      worksheet = workbook.getWorksheet(1);
    } else {
      worksheet = workbook.addWorksheet("Leads");
      worksheet.addRow(["Name", "Email", "Phone", "Interest Area", "Message", "Date"]);
    }

    worksheet.addRow([
      name,
      email,
      phone,
      interest,
      message,
      new Date().toLocaleString()
    ]);

    await workbook.xlsx.writeFile(FILE_PATH);

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
