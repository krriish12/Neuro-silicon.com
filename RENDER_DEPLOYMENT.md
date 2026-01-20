# Deploy Backend to Render (Free) - 5 Minute Setup

## Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Add backend API server"
git push origin main
```

## Step 2: Deploy to Render

1. Go to https://render.com/
2. Click **Get Started** → Sign up with GitHub
3. After login, click **New +** → **Web Service**
4. Click **Connect** next to your repository
5. Configure:
   - **Name**: `neuro-silicon-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Select **Free**
6. Click **Create Web Service**

## Step 3: Wait for Deployment

- Render will automatically deploy (takes 2-3 minutes)
- Once complete, you'll see "Live" status
- Copy your backend URL - it looks like:
  ```
  https://neuro-silicon-backend.onrender.com
  ```

## Step 4: Update Frontend

I'll update Contact.jsx and Admin.jsx to use your backend URL.

**Give me your Render backend URL and I'll update the code automatically.**

## How to Use:

### View All Leads:
1. Go to your website: `https://neuro-silicon.com/admin`
2. Login with credentials
3. View all leads in a table
4. Click **Download Excel** to export

### Features:

✅ All leads stored in JSON file on server
✅ Data persists forever (unlike localStorage)
✅ Works in production immediately
✅ Simple admin panel to view leads
✅ One-click Excel download
✅ Completely free on Render
✅ No database setup needed

## API Endpoints:

- `POST /api/save-lead` - Save new lead
- `GET /api/leads` - Get all leads (admin)
- `POST /api/admin-login` - Admin authentication
- `DELETE /api/leads/:id` - Delete a lead
- `GET /api/health` - Check server status

## Important Notes:

- Free Render services sleep after 15 minutes of inactivity
- First request after sleep takes 30 seconds to wake up
- After that, responses are instant
- Upgrade to paid plan ($7/month) to prevent sleeping

---

**Next Step:** Complete the deployment and give me your backend URL!
