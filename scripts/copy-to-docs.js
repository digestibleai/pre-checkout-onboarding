import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively copy directory
function copyDir(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Function to remove directory recursively
function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (let entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        removeDir(fullPath);
      } else {
        fs.unlinkSync(fullPath);
      }
    }
    fs.rmdirSync(dirPath);
  }
}

try {
  console.log('🚀 Starting deployment process...');

  // Check if dist directory exists
  if (!fs.existsSync('dist')) {
    console.error('❌ Error: dist directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // Backup CNAME file if it exists
  let cnameContent = null;
  const cnamePath = path.join('docs', 'CNAME');
  if (fs.existsSync(cnamePath)) {
    console.log('📄 Backing up CNAME file...');
    cnameContent = fs.readFileSync(cnamePath, 'utf8');
  }

  // Clean docs directory
  console.log('🧹 Cleaning docs directory...');
  removeDir('docs');

  // Create docs directory
  console.log('📁 Creating docs directory...');
  fs.mkdirSync('docs', { recursive: true });

  // Copy dist contents to docs
  console.log('📋 Copying files from dist to docs...');
  copyDir('dist', 'docs');

  // Restore CNAME file if it was backed up
  if (cnameContent) {
    console.log('📄 Restoring CNAME file...');
    fs.writeFileSync(cnamePath, cnameContent);
  }

  // Copy favicon from src/assets to docs root
  const faviconSrc = path.join('src', 'assets', 'favicon.png');
  const faviconDest = path.join('docs', 'favicon.png');
  if (fs.existsSync(faviconSrc)) {
    console.log('📄 Copying favicon...');
    fs.copyFileSync(faviconSrc, faviconDest);
  }

  console.log('✅ Deployment completed successfully!');
  console.log('📄 Files copied to docs/ directory for GitHub Pages');

} catch (error) {
  console.error('❌ Error during deployment:', error.message);
  process.exit(1);
}
