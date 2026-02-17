// File System Code
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'a.txt');

fs.writeFile(filePath, 'learning fs module writefile', (err) => {
    if (err) console.log(err);
    else console.log('done successfully....');
});