# Backend Deployment Guide

## ✅ What I Added:
- `/api/save-lead` endpoint - saves form submissions to leads.xlsx
- Deployment configuration files

## 🚀 Deploy to Render.com (FREE)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Add backend server with Excel storage"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy on Render
1. Go to [render.com](https://render.com) and sign up (free)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Render will auto-detect settings from `render.yaml`
5. Click "Create Web Service"

### Step 3: Get Your Backend URL
After deployment, Render will give you a URL like:
`https://neuro-silicon-backend.onrender.com`

### Step 4: Update Frontend
Update the Contact.jsx fetch URL from:
```javascript
fetch("http://localhost:5000/api/save-lead", ...)
```
To:
```javascript
fetch("https://YOUR-RENDER-URL.onrender.com/api/save-lead", ...)
```

---

## Alternative: Deploy to Railway.app

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy on Railway
1. Go to [railway.app](https://railway.app) and sign up
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway auto-detects Node.js and deploys
5. Go to Settings → Generate Domain

### Step 3: Update Frontend with Railway URL

---

## Important Notes:

### Excel File Persistence
⚠️ On free hosting (Render/Railway), files are **temporary**:
- The leads.xlsx file will be deleted when the server restarts
- For permanent storage, use:
  - **Google Sheets API** (recommended)
  - **Database** (PostgreSQL, MongoDB)
  - **Cloud Storage** (AWS S3, Cloudinary)

### Environment Variables
For production, move credentials to environment variables:
1. In Render/Railway dashboard, add environment variables:
   - `ADMIN_ID=your_admin_id`
   - `ADMIN_PASS=your_admin_password`

2. Update server.js:
```javascript
const ADMIN_ID = process.env.ADMIN_ID || "KrishnaGana@12";
const ADMIN_PASS = process.env.ADMIN_PASS || "Muddukrishna@12";
```

---

## Testing Locally

Run both servers:
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run dev
```

Backend runs on: http://localhost:5000
Frontend runs on: http://localhost:5173

---

## API Endpoints

- `POST /api/save-lead` - Save form submission
- `POST /api/admin-login` - Admin authentication
- `GET /api/download-leads` - Download leads Excel file
