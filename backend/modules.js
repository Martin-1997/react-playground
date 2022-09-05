// This simpy runs the file and returns an empty object, which is stored in ppl
// an export is required if we want to access objects or functions from the module
//const userdata = require('./users'); // userdata.users
const { users, currencies} = require('./users');

console.log(users)

const os = require('os'); //build in module
console.log(os.platform(), os.homedir());