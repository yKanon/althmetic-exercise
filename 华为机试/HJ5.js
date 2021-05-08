// 写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  console.log(parseInt(line, 16));
});
