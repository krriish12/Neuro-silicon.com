const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to store leads
const LEADS_FILE = path.join(__dirname, 'leads.json');

// Initialize leads file if it doesn't exist
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([]));
}

// Helper function to read leads
function readLeads() {
  try {
    const data = fs.readFileSync(LEADS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper function to write leads
function writeLeads(leads) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// API Routes

// Save new lead
app.post('/api/save-lead', (req, res) => {
  try {
    const { name, email, phone, interest, message } = req.body;

    // Validate required fields
    if (!name || !email || !interest || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Read existing leads
    const leads = readLeads();

    // Create new lead with timestamp
    const newLead = {
      id: Date.now(),
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name,
      email,
      phone: phone || "N/A",
      interest,
      message
    };

    // Add to leads array
    leads.push(newLead);

    // Save to file
    writeLeads(leads);

    res.json({
      success: true,
      message: 'Lead saved successfully',
      lead: newLead
    });

  } catch (error) {
    console.error('Error saving lead:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Get all leads (for admin)
app.get('/api/leads', (req, res) => {
  try {
    const leads = readLeads();
    res.json({
      success: true,
      leads,
      count: leads.length
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Admin login
app.post('/api/admin-login', (req, res) => {
  const { id, password } = req.body;

  // Simple authentication (use environment variables in production)
  const ADMIN_ID = process.env.ADMIN_ID || "KrishnaGana@12";
  const ADMIN_PASS = process.env.ADMIN_PASS || "Muddukrishna@12";

  if (id === ADMIN_ID && password === ADMIN_PASS) {
    res.json({
      success: true,
      message: 'Login successful'
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

// Delete a lead
app.delete('/api/leads/:id', (req, res) => {
  try {
    const leadId = parseInt(req.params.id);
    let leads = readLeads();

    const initialLength = leads.length;
    leads = leads.filter(lead => lead.id !== leadId);

    if (leads.length === initialLength) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      });
    }

    writeLeads(leads);

    res.json({
      success: true,
      message: 'Lead deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📊 Leads file: ${LEADS_FILE}`);
});
