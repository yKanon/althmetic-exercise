// 输入一个int型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
// 保证输入的整数最后一位不是0。

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  //     const tokens = line.split(' ');
  //     console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  let set = new Set();
  set = Array.from(line).reduceRight((pre, next) => {
    pre.add(next);
    return set;
  }, set);

  console.log(+Array.from(set).join(""));
});
