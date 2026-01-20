# Deploy Node.js Backend on Hostinger

## Your SSH Details
```
IP: 145.79.212.252
Port: 65002
Username: u769027312
```

---

## Step 1: Connect via SSH

### Option A: Using Windows PowerShell/CMD
```bash
ssh -p 65002 u769027312@145.79.212.252
```
Enter your password when prompted.

### Option B: Using PuTTY (Windows)
1. Download PuTTY from https://www.putty.org/
2. Open PuTTY
3. Enter:
   - Host: `145.79.212.252`
   - Port: `65002`
   - Connection type: SSH
4. Click "Open" and login with username `u769027312`

---

## Step 2: Setup Node.js Environment

Once connected via SSH, run these commands:

```bash
# Check if Node.js is installed
node --version
npm --version

# If not installed, Hostinger usually has it pre-installed
# If needed, contact Hostinger support to enable Node.js
```

---

## Step 3: Deploy Your Backend

### Method 1: Clone from GitHub (Recommended)

```bash
# Navigate to your web directory
cd ~/domains/neuro-silicon.com

# Create backend directory
mkdir backend
cd backend

# Clone your repository (replace with your GitHub repo URL)
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git .

# Install dependencies
npm install

# Test if it works
node server.js
```

Press `Ctrl+C` to stop the test server.

### Method 2: Upload via FTP

1. Use FileZilla or any FTP client
2. Connect with:
   - Host: `ftp://145.79.212.252`
   - Username: `u769027312.neuro-silicon.com`
   - Password: Your FTP password
   - Port: 21
3. Upload these files to `/domains/neuro-silicon.com/backend/`:
   - `server.js`
   - `package.json`
   - `package-lock.json`
4. Then via SSH run:
   ```bash
   cd ~/domains/neuro-silicon.com/backend
   npm install
   ```

---

## Step 4: Install PM2 (Process Manager)

PM2 keeps your Node.js app running 24/7, even after server restarts.

```bash
# Install PM2 globally
npm install -g pm2

# Start your app with PM2
cd ~/domains/neuro-silicon.com/backend
pm2 start server.js --name "neuro-backend"

# Make PM2 auto-start on server reboot
pm2 startup
pm2 save

# Check if it's running
pm2 status
pm2 logs neuro-backend
```

### Useful PM2 Commands:
```bash
pm2 status              # Check app status
pm2 logs neuro-backend  # View logs
pm2 restart neuro-backend  # Restart app
pm2 stop neuro-backend  # Stop app
pm2 delete neuro-backend  # Remove from PM2
```

---

## Step 5: Configure Port and Access

### Update server.js port (if needed)
Your server.js uses `PORT = process.env.PORT || 5000`

Hostinger may require a specific port. Check with:
```bash
# See what ports are available
netstat -tuln | grep LISTEN
```

### Set up reverse proxy (via .htaccess)

Create/edit `.htaccess` in your `public_html` folder:

```bash
cd ~/domains/neuro-silicon.com/public_html
nano .htaccess
```

Add this content:
```apache
RewriteEngine On

# Proxy API requests to Node.js backend
RewriteCond %{REQUEST_URI} ^/api/
RewriteRule ^(.*)$ http://localhost:5000/$1 [P,L]
```

Save with `Ctrl+X`, then `Y`, then `Enter`.

---

## Step 6: Access Your Backend

Your backend will be accessible at:
```
https://neuro-silicon.com/api/save-lead
https://neuro-silicon.com/api/admin-login
https://neuro-silicon.com/api/download-leads
```

---

## Step 7: Update Frontend

Update your `Contact.jsx` file to use:
```javascript
fetch("https://neuro-silicon.com/api/save-lead", {
  method: "POST",
  // ... rest of your code
})
```

---

## Step 8: Set Environment Variables (Security)

Create a `.env` file in your backend directory:

```bash
cd ~/domains/neuro-silicon.com/backend
nano .env
```

Add:
```
PORT=5000
ADMIN_ID=your_admin_id
ADMIN_PASS=your_admin_password
NODE_ENV=production
```

Update your `server.js` to use these:
```javascript
require('dotenv').config();
const ADMIN_ID = process.env.ADMIN_ID;
const ADMIN_PASS = process.env.ADMIN_PASS;
```

Then restart PM2:
```bash
pm2 restart neuro-backend
```

---

## Troubleshooting

### App not starting?
```bash
# Check logs
pm2 logs neuro-backend

# Check if port is already in use
lsof -i :5000

# Try a different port
PORT=3000 pm2 start server.js --name "neuro-backend"
```

### Can't access API from frontend?
- Check if `.htaccess` proxy rules are correct
- Verify CORS settings in `server.js`
- Check PM2 status: `pm2 status`
- View logs: `pm2 logs`

### Permission issues?
```bash
# Give execute permissions
chmod +x server.js
chmod -R 755 ~/domains/neuro-silicon.com/backend
```

---

## Important Notes

### Excel File Persistence
- Files created on Hostinger will persist (unlike Render free tier)
- `leads.xlsx` will be saved permanently
- Backup regularly by downloading via FTP or the download API

### SSL/HTTPS
- Hostinger provides free SSL
- Your API will be accessible via HTTPS automatically

### Monitoring
```bash
# Check resource usage
pm2 monit

# View detailed logs
pm2 logs neuro-backend --lines 100
```

---

## Quick Reference

```bash
# SSH Login
ssh -p 65002 u769027312@145.79.212.252

# Navigate to backend
cd ~/domains/neuro-silicon.com/backend

# Update code (if using Git)
git pull origin main
npm install
pm2 restart neuro-backend

# Check status
pm2 status
pm2 logs neuro-backend
```

---

## Need Help?

If Node.js is not available or you face issues:
1. Contact Hostinger support via chat (bottom right "Ask Kodee")
2. Ask them to enable Node.js on your hosting plan
3. Request specific port number for your Node.js app

Cloud hosting plans usually have Node.js pre-installed, but verify first!
