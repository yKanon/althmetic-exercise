// 数据表记录包含表索引和数值（int范围的正整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照key值升序进行输出。

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let map = new Map();
let len,
  index = 0;

const ascendingSort = (a, b) => a - b;

rl.on("line", function (line) {
  //     const tokens = line.split(' ');
  //     console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  let [key, val] = line.split(" ").map((i) => parseInt(i));

  if (!val) {
    len = key;
    return;
  }

  if (index < len) {
    if (map.get(key)) {
      map.set(key, map.get(key) + val);
    } else {
      map.set(key, val);
    }
    index++;

    if (index === len) {
      const sorted = Array.from(map.keys()).sort(ascendingSort);
      sorted.forEach((i) => console.log(`${i} ${map.get(i)}`));
    }
  }
});
