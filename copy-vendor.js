// copy-vendor.js
import fs from 'fs';
import path from 'path';

// Tailwind v4 only extracts utility classes from these compiled library files
// when the @source path lives inside node_modules. Copying the symlinked
// @marigold packages to a real (dereferenced) folder there makes scanning work
// in StackBlitz/WebContainer, which doesn't follow pnpm's symlinks.
const source = path.resolve('node_modules/@marigold');
const destination = path.resolve('node_modules/.marigold-src');

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
  console.log('✅ Marigold styles copied to node_modules/.marigold-src');
} catch (err) {
  console.error('❌ Failed to copy styles:', err.message);
}
