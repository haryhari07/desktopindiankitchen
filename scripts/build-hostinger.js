const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const sourceDir = path.join(__dirname, '..');
const deployDir = path.join(sourceDir, 'hostinger-deploy');

console.log('🚀 Starting Hostinger Build Process...');

// 1. Clean previous deploy folder
if (fs.existsSync(deployDir)) {
  console.log('🧹 Cleaning previous build...');
  fs.rmSync(deployDir, { recursive: true, force: true });
}
fs.mkdirSync(deployDir);

// 2. Run Next.js Build
console.log('🏗️  Running Next.js Build...');
try {
  execSync('npm run build', { stdio: 'inherit', cwd: sourceDir });
} catch (error) {
  console.error('❌ Build failed!');
  process.exit(1);
}

// 3. Copy Standalone Server
console.log('📦 Copying standalone server...');
const standaloneDir = path.join(sourceDir, '.next', 'standalone');
if (!fs.existsSync(standaloneDir)) {
  console.error('❌ Standalone build not found! Ensure output: "standalone" is in next.config.ts');
  process.exit(1);
}
fs.cpSync(standaloneDir, deployDir, { recursive: true });

// 4. Copy Static Assets (.next/static -> .next/static)
console.log('🎨 Copying static assets...');
const staticSource = path.join(sourceDir, '.next', 'static');
const staticDest = path.join(deployDir, '.next', 'static');
fs.mkdirSync(path.dirname(staticDest), { recursive: true });
fs.cpSync(staticSource, staticDest, { recursive: true });

// 5. Copy Public Folder
console.log('📂 Copying public folder...');
const publicSource = path.join(sourceDir, 'public');
const publicDest = path.join(deployDir, 'public');
fs.cpSync(publicSource, publicDest, { recursive: true });

// 6. Copy Data Folder (Database)
console.log('💾 Copying database folder...');
const dataSource = path.join(sourceDir, 'data');
const dataDest = path.join(deployDir, 'data');
fs.cpSync(dataSource, dataDest, { recursive: true });

console.log(`
✅ Hostinger Deployment Package Ready!
-------------------------------------
📂 Location: ${deployDir}

👉 INSTRUCTIONS:
1. Zip the CONTENTS of the 'hostinger-deploy' folder.
2. Upload the ZIP to Hostinger 'public_html'.
3. Extract it.
4. Set 'Application Startup File' to 'server.js'.
5. Run 'npm install' in Hostinger console.
6. Start the server.
`);
