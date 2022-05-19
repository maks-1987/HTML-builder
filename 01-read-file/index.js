const path = require('path');
const fs = require('fs');

const { stdout } = process;

const pathToFIle = path.join(__dirname, 'text.txt');

const readFile = fs.createReadStream(pathToFIle);
readFile.on('data', (data) => {
  stdout.write(data);
});
