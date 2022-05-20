const fs = require('fs');
const path = require('path');
const { stdout, stdin, exit } = require('process');

let output = fs.createWriteStream(path.join(__dirname, 'enteredText.txt'), {
  flags: 'a',
});

stdout.write('Enter any text....\n');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    exit();
  }
  output.write(data);
});

process.on('exit', () => {
  stdout.write('Good bye!');
});

function handle(signal) {
  exit();
}

process.on('SIGINT', handle);
