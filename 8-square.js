const args = process.argv.slice(2);
const size = parseInt(args[0]);

if (!size || size < 1) {
  console.log("Missing size");
} else {
  let row = 0;
  while (row < size) {
    console.log("X".repeat(size));
    row++;
  }
}
