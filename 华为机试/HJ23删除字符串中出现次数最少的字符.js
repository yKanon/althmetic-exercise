// 实现删除字符串中出现次数最少的字符，若多个字符出现次数一样，则都删除。输出删除这些单词后的字符串，字符串中其它字符保持原来的顺序。
// 注意每个输入文件有多组输入，即多个字符串用回车隔开

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  //     const tokens = line.split(' ');
  //     console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  if (!line) return;
  let map = {};
  Array.from(line).forEach((l) => {
    if (map[l]) {
      map[l]++;
    } else {
      map[l] = 1;
    }
  });

  let num = Object.keys(map)
    .map((o) => map[o])
    .sort((a, b) => a - b)[0];
  let letters = Object.keys(map).filter((o) => map[o] === num);

  let res = Array.from(line).filter((l) => !letters.includes(l));
  console.log(res.join(""));
});
