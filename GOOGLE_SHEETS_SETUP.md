# Google Sheets Integration Setup Guide

## Step 1: Create Google Sheet

1. Go to https://sheets.google.com
2. Create a new blank spreadsheet
3. Name it "Neuro-Silicon Leads"
4. Add these column headers in Row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Course Interest`
   - F1: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Create timestamp in IST
    var timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Append the data as a new row
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || 'N/A',
      data.interest || '',
      data.message || ''
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: "Lead saved successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "API is working" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (disk icon)
5. Name the project "Neuro-Silicon Lead Capture"

## Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - Description: `Lead Capture API`
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to Neuro-Silicon Lead Capture (unsafe)**
9. Click **Allow**
10. **COPY THE WEB APP URL** - it looks like:
    ```
    https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxx/exec
    ```

## Step 4: Update Contact.jsx

Replace the form submission code in Contact.jsx with the Google Sheets API URL.

I'll do this automatically in the next step.

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check your Google Sheet - you should see the new lead appear
3. You can export the sheet to Excel anytime: **File** → **Download** → **Microsoft Excel (.xlsx)**

## Benefits

✅ No backend server needed
✅ Works in production immediately
✅ Real-time data storage
✅ Easy to export to Excel anytime
✅ Can access from anywhere
✅ Completely free
✅ No database management
✅ Can share sheet with team members

## Troubleshooting

### Data not appearing?
- Check if the Apps Script is deployed as "Anyone" can access
- Verify the web app URL is correct in Contact.jsx
- Check browser console for errors

### Permission denied?
- Re-authorize the script
- Make sure "Execute as: Me" is selected

### Want to add more columns?
1. Add columns to your sheet
2. Update the Apps Script `appendRow` array
3. Update Contact.jsx form fields
4. Redeploy the script

---

**Next:** Provide me with your deployed Web App URL, and I'll update Contact.jsx automatically.
