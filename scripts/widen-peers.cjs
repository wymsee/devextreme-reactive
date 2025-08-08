const fs = require('fs');
const path = require('path');

for (const dir of fs.readdirSync('packages')) {
  const pkgPath = path.join('packages', dir, 'package.json');
  if (!fs.existsSync(pkgPath)) continue;

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  if (!pkg.peerDependencies) continue;

  let changed = false;
  for (const dep of Object.keys(pkg.peerDependencies)) {
    if (dep.startsWith('@synconset/dx-')) {
      pkg.peerDependencies[dep] = '>=4.0.0 <5';
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
    console.log('updated', pkgPath);
  }
}
