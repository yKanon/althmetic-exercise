// 写出一个程序，接受一个由字母、数字和空格组成的字符串，和一个字母，然后输出输入字符串中该字母的出现次数。不区分大小写，字符串长度小于500。

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on("line", function (line) {
  lines.push(line.toLowerCase());
  let res = lines[0].split("").filter((char) => char === lines[1]);

  if (lines[1]) console.log(res.length);
});
