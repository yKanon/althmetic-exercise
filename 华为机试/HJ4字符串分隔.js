// •连续输入字符串，请按长度为8拆分每个字符串后输出到新的字符串数组；
// •长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  if (line.length <= 8) {
    let result = line;
    for (let j = 0; j < 8 - line.length; j++) {
      result = result + "0";
    }
    console.log(result);
  } else {
    let num = 0;
    for (let n = 0; n < line.length / 8 - 1; n++) {
      console.log(line.slice(n * 8, (n + 1) * 8));
      num++;
    }
    let strTail = line.slice(num * 8);
    for (let k = 0; k < 8 - line.slice(num * 8).length; k++) {
      strTail = strTail + "0";
    }
    console.log(strTail);
  }
});
