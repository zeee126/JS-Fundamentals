const args = process.argv.slice(2);

const first = args[0] === undefined ? "undefined" : args[0];
const second = args[1] === undefined ? "undefined" : args[1];

console.log(`${first} is ${second}`);
