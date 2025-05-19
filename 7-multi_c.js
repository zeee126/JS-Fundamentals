const args = process.argv.slice(2);
const count = parseInt(args[0]);

if (!count) {
  // Handles NaN, 0, null, undefined
  if (args[0] === undefined || isNaN(count)) {
    console.log("Missing number of occurrences");
  }
} else if (count > 0) {
  let i = 0;
  while (i < count) {
    console.log("C is fun");
    i++;
  }
}
// If count <= 0, do nothing (no output)
