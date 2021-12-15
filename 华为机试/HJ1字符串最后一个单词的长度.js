// 计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于5000。

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const tokens = line.split(" ");
  console.log(tokens[tokens.length - 1].length);
});
