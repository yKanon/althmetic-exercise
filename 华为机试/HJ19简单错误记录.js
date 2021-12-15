const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let record = [];

rl.on("line", function (line) {
  let index = line.lastIndexOf("\\");
  let i = 0;
  let [name, num] = line.slice(index + 1).split(" ");
  name = name.slice(-16);
  if (record.length === 0) {
    record.push([name, num, 1]);
  } else {
    record.forEach((r) => {
      if (r[0] === name && r[1] === num) {
        r[2] += 1;
      } else {
        i++;
      }
    });
    i === record.length && record.push([name, num, 1]);
  }
});

rl.on("pause", () => {
  record.slice(-8).forEach((r) => {
    console.log(`${r[0]} ${r[1]} ${r[2]}`);
  });
});
