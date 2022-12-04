const os = require('os');


// the user's info
const user = os.userInfo();
console.log(user);

// the system's uptime (whatever this is)
console.log(`System uptime is ${os.uptime} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOs)