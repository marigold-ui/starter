// copy-vendor.js
import fs from 'fs';
import path from 'path';

const source = path.resolve('node_modules/@marigold');
const destination = path.resolve('src/vendor/marigold');

// 1. Clean previous copy
if (fs.existsSync(destination)) {
  fs.rmSync(destination, { recursive: true, force: true });
}

// 2. Create destination folder
fs.mkdirSync(destination, { recursive: true });

// 3. Copy each package, resolving symlinks to their real paths
try {
  const packages = fs.readdirSync(source);
  for (const pkg of packages) {
    const pkgPath = path.join(source, pkg);
    const realPath = fs.realpathSync(pkgPath);
    const destPath = path.join(destination, pkg);
    fs.cpSync(realPath, destPath, { recursive: true, dereference: true });
  }
  console.log('✅ Marigold styles copied to src/vendor/marigold');
} catch (err) {
  console.error('❌ Failed to copy styles:', err.message);
}
