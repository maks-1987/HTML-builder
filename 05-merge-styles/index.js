const path = require('path');
const fs = require('fs');

const dirStyles = path.join(__dirname, 'styles');
const dirProject = path.join(__dirname, 'project-dist');

function mergeData() {
  fs.readdir(dirStyles, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    let writeStream = fs.createWriteStream(path.join(dirProject, 'bundle.css'), { flags: 'a' });

    for (item of files) {
      if (item.isFile() && path.extname(item.name) === '.css') {
        fs.readFile(path.join(dirStyles, item.name), (err, data) => {
          if (err) throw err;
          writeStream.write(data.toString() + '\n');
        });
      }
    }
  });
}

mergeData();
