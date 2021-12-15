// 接受一个只包含小写字母的字符串，然后输出该字符串反转后的字符串。（字符串长度不超过1000）

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  //     const tokens = line.split(' ');
  //     console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  console.log(line.split("").reverse().join(""));
});
