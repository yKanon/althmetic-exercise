// 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）

// 最后一个数后面也要有空格

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  let res = "";
  let num = +line;
  for (let i = 2; i * i <= num && i < num; i++) {
    while (num % i === 0) {
      num /= i;
      res += i + " ";
    }
  }
  if (num > 1) res += num + " ";
  console.log(res);
});
