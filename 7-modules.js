const obj = require('./3-names');
const message = require('./4-message');

const data = require('./5-myka');

console.log(`${data.message} ${data.myka.firstName} ${data.myka.lastName}`);
console.log(`${data.message} ${data.myka.firstName} ${data.myka.secondName} ${data.myka.lastName}`);
console.log(`${data.message} ${data.myka.firstName} ${data.myka.secondName} ${data.myka.middleName} ${data.myka.lastName}`);

message(name1, name2);
message(name2, name1);

require('./6-func');