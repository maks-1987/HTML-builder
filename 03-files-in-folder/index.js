const path = require('path');
const fs = require('fs');
const { stdout } = require('process');

const dirPath = path.join(__dirname, 'secret-folder');

fs.promises.readdir(dirPath, { withFileTypes: true }).then((result) => {
  for (item of result) {
    if (item.isFile()) {
      let fileName = path.basename(path.join(dirPath, item.name), path.extname(item.name));
      let fileExt = path.extname(item.name).slice(1);
      let filePath = path.resolve(path.join(dirPath, item.name));
      let fileStat = Number();
      // statistics
      fs.stat(filePath, (err, stats) => {
        if (err) stdout.write('error');
        fileStat = stats.size;
        stdout.write(`${fileName} - ${fileExt} - ${fileStat} bytes\n`);
      });
    }
  }
});
