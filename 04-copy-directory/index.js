const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, 'files');
const dirPathCopy = path.join(__dirname, 'files-copy');

(function initDir() {
  fs.rm(dirPathCopy, { recursive: true }, (err) => {
    if (err) {
      copyDir(dirPath, dirPathCopy);
    } else {
      copyDir(dirPath, dirPathCopy);
    }
  });
})();

function copyDir(from, destination) {
  fs.mkdir(destination, { recursive: true }, (err) => {
    if (err) throw err;
  });

  fs.readdir(from, { withFileTypes: true }, (err, files) => {
    if (err) throw err;

    for (item of files) {
      if (item.isFile()) {
        fs.copyFile(path.join(from, item.name), path.join(destination, item.name), fs.constants.COPYFILE_FICLONE, (err) => {
          if (err) throw err;
        });
      } else {
        copyDir(path.join(dirPath, item.name), path.join(dirPathCopy, `${item.name}`));
      }
    }
  });
}
