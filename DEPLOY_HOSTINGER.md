# How to Deploy to Hostinger (with Database & Login)

You asked if it's possible to use the `out` folder (Static Export) while keeping the database and login working.

**Answer: NO.**
Static exports (`out` folder) turn your website into simple HTML files. They cannot run the server-side code required for:
1.  **Login/Sign Up** (NextAuth needs a server)
2.  **Database** (Reading/Writing to `db.json` needs a server)
3.  **AI Features** (API keys must be hidden on a server)

**Solution: Deploy as a Node.js Application**
Hostinger supports Node.js applications. I have configured your project with `output: 'standalone'` which creates a lightweight server perfect for Hostinger.

---

## Step-by-Step Deployment Guide

### 1. Prepare the Build
Run these commands in your terminal:
```bash
npm run build
```
This will create a `.next/standalone` folder. This is your production server.

### 2. Prepare Files for Upload
You need to upload specific files to Hostinger. Create a ZIP file containing:
1.  The entire contents of `.next/standalone`
2.  The `.next/static` folder (copy it into `.next/standalone/.next/static`)
3.  The `public` folder (copy it into `.next/standalone/public`)
4.  The `data` folder (copy it into `.next/standalone/data`) - *Crucial for your database!*

**Structure inside your ZIP should look like this:**
```
/server.js
/package.json
/public/
/data/
/.next/
    /server/
    /static/ (Moved from .next/static)
```

### 3. Configure Hostinger
1.  Log in to **Hostinger hPanel**.
2.  Go to **Websites** -> **Manage**.
3.  Search for **Node.js** in the sidebar.
4.  **Node.js Configuration**:
    *   **Node.js Version**: Select **v20** (or latest available).
    *   **Application Startup File**: `server.js` (default is usually app.js, change it!).
    *   **Application Root**: `public_html` (or wherever you upload).
5.  Click **Create**.

### 4. Upload Files
1.  Go to **File Manager**.
2.  Navigate to `public_html`.
3.  Delete default files.
4.  **Upload** your ZIP file and **Extract** it here.
5.  Ensure `server.js` is directly in `public_html` (not inside a subfolder).

### 5. Install Dependencies
1.  Go back to the **Node.js** section in hPanel.
2.  Click **NPM Install** (this installs the tiny production dependencies).

### 6. Environment Variables
In the **Node.js** section or by creating a `.env` file in File Manager, add your variables:
```
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-secret-here
GOOGLE_API_KEY=your-api-key
```

### 7. Start the Server
1.  Click **Restart** or **Start** in the Node.js panel.
2.  Your site should now be live with Login and Database working!

---

**Note on Database (`db.json`):**
Since `lowdb` writes to a file, every time you redeploy, you might overwrite your user database if you upload a fresh `data/db.json`.
*   **Recommendation**: Before redeploying in the future, download the `data/db.json` from Hostinger to your computer to back it up, or don't overwrite that specific file when uploading updates.
