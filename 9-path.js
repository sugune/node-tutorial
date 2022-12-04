const path = require('path');

const seperator = path.sep;

console.log(seperator)

const fileName = path.join('/node-express-course/', 'subfolder', 'test.txt');
const absolute = path.resolve(__dirname, 'node-express-course', 'subfolder', 'test.txt')

const base = path.basename(fileName);
console.log(fileName)
console.log(base)
console.log(absolute)