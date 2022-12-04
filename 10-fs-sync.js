const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./storage/first.txt', 'utf8');
const second = readFileSync('./storage/second.txt', 'utf8');

writeFileSync(
  './storage/message.txt',
  `\nhere is the message: ${first}`,
  {flag: 'a'}
)