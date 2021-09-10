// 编写一个程序，将输入字符串中的字符按如下规则排序。

// 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。

// 如，输入： Type 输出： epTy

// 规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。

// 如，输入： BabA 输出： aABb

// 规则 3 ：非英文字母的其它字符保持原来的位置。

// 如，输入： By?e 输出： Be?y

// 注意有多组测试数据，即输入有多行，每一行单独处理（换行符隔开的表示不同行）
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var i, j, tmp;
  var arr = line.match(/[a-zA-Z]/g);
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].toUpperCase() > arr[j + 1].toUpperCase()) {
        tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  var arrAll = line.split("");
  var count = -1;
  var result = arrAll.map(function (item) {
    if (/[a-zA-Z]/.test(item)) {
      count++;
      return arr[count];
    } else {
      return item;
    }
  });
  console.log(result.join(""));
});
