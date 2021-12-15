// 输入一个int型的正整数，计算出该int型数据在内存中存储时1的个数。

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  //     const tokens = line.split(' ');
  //     console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  let val = (+line).toString(2);
  let num = 0;
  for (let i of val) {
    if (i === "1") {
      num += 1;
    }
  }
  console.log(num);
});
