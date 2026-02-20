const fs = require('fs');
const path = require('path');

// Folders to exclude from the list
const exclude = ['.git', 'node_modules', '.vscode'];

const getFolders = (dir) => {
  return fs.readdirSync(dir)
    .filter(file => {
      return fs.statSync(path.join(dir, file)).isDirectory() && !exclude.includes(file);
    });
};

const folders = getFolders('./');
console.log("### 🚀 Current Projects in this Repo:");
folders.forEach(folder => console.log(`- [${folder}](./${folder})`));