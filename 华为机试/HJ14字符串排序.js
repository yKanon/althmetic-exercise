// 给定n个字符串，请对n个字符串按照字典序排列。

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0,
  index = 1;
let res = [];
rl.on("line", function (line) {
  //     const tokens = line.split(' ');
  //     console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  if (n === 0) {
    n = +line;
  } else {
    res.push(line);

    if (index++ >= n) {
      let sorted = res.sort();
      sorted.forEach((i) => console.log(i));
    }
  }
});
