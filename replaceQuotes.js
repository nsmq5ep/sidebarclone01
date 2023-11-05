const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(/’/g, "'");
    fs.writeFileSync(filePath, newContent, 'utf8');
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (let file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            walkDir(filePath);
        } else if (path.extname(filePath) === '.html') {
            replaceInFile(filePath);
        }
    }
}

walkDir('./public'); // replace './public' with the path to your HTML files
