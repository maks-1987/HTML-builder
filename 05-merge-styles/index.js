const path = require('path');
const fs = require('fs');

const dirStyles = path.join(__dirname, 'styles');
const dirProject = path.join(__dirname, 'project-dist');

function mergeData(from, to, cssName) {
  fs.readdir(from, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    let writeStream = fs.createWriteStream(path.join(to, cssName), { flags: 'a' });

    for (item of files) {
      if (item.isFile() && path.extname(item.name) === '.css') {
        fs.readFile(path.join(from, item.name), (err, data) => {
          if (err) throw err;
          writeStream.write(data.toString() + '\n');
        });
      }
    }
  });
}

mergeData(dirStyles, dirProject, 'bundle.css');

module.exports = { mergeData };
