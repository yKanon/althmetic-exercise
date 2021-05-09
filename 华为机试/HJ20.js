// 密码要求:

// 1.长度超过8位

// 2.包括大小写字母.数字.其它符号,以上四种至少三种

// 3.不能有相同长度大于2的子串重复

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  let num = 0;
  let flag = true;
  if (line.length <= 8) flag = false;
  if (/[a-z]/.test(line)) num++;
  if (/[A-Z]/.test(line)) num++;
  if (/[0-9]/.test(line)) num++;
  if (/\W/.test(line)) num++;

  if (num < 3) flag = false;

  for (let i = 0; i < line.length - 6; i++) {
    for (let j = i + 3; j < line.length - 3; j++) {
      if (
        line[i] === line[j] &&
        line[i + 1] === line[j + 1] &&
        line[i + 2] === line[j + 2]
      ) {
        flag = false;
      }
    }
  }

  if (flag) console.log("OK");
  else console.log("NG");
});
