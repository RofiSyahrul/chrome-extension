const fs = require('fs');
const path = require('path');
const archiveBuild = require('./archive-build');
const updateReadme = require('./update-readme');

if (!fs.existsSync('./build')) {
  fs.mkdirSync('./build');
}

const jsFiles = fs.readdirSync('./build/js');
const manifestPath = path.join(__dirname, 'build', 'manifest.json');
const manifestJson =
  fs.readFileSync(manifestPath, {
    encoding: 'utf8'
  }) || '{}';
const manifest = JSON.parse(manifestJson);

manifest.content_scripts = [
  {
    matches: ['http://*/*', 'https://*/*'],
    js: jsFiles.map(str => `/js/${str}`)
  }
];

fs.writeFileSync(
  manifestPath,
  JSON.stringify(manifest, null, 2),
  'utf8'
);

archiveBuild();
updateReadme();
