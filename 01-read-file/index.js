const path = require('path');
const fs = require('fs');

const { stdout } = process;

const pathToFIle = path.resolve('./01-read-file');

const readFile = fs.createReadStream(pathToFIle + '/text.txt');
readFile.on('data', (data) => {
  stdout.write(data);
});
