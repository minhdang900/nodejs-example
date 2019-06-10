const process = require('process');
console.log(process.cwd());
console.log(process.execPath);
console.log(process.env.port);
console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir('/tmp');
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}
