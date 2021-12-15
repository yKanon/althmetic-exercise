// 开发一个坐标计算工具， A表示向左移动，D表示向右移动，W表示向上移动，S表示向下移动。从（0,0）点开始移动，从输入字符串里面读取一些坐标，并将最终输入结果输出到输出文件里面。

// 输入：

// 合法坐标为A(或者D或者W或者S) + 数字（两位以内）

// 坐标之间以;分隔。

// 非法坐标点需要进行丢弃。如AA10;  A1A;  $%$;  YAD; 等。

// 下面是一个简单的例子 如：

// A10;S20;W10;D30;X;A1A;B10A11;;A10;

// 处理过程：

// 起点（0,0）

// +   A10   =  （-10,0）

// +   S20   =  (-10,-20)

// +   W10  =  (-10,-10)

// +   D30  =  (20,-10)

// +   x    =  无效

// +   A1A   =  无效

// +   B10A11   =  无效

// +  一个空 不影响

// +   A10  =  (10,-10)

// 结果 （10， -10）

// 注意请处理多组输入输出

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const reg = /^[WASD]\d{1,2}$/;
rl.on("line", function (line) {
  //     const tokens = line.split(' ');
  //     console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
  let operations = line.split(";");
  let coordinates = [0, 0];

  // 有效坐标移动
  operations = operations
    .map((o) => {
      let flag = reg.test(o);
      if (!flag) return "";
      return o;
    })
    .filter((i) => i !== "");

  let res = operations.reduce((pre, next) => {
    if (next[0] === "W") {
      coordinates[1] += +next.slice(1);
    } else if (next[0] === "D") {
      coordinates[0] += +next.slice(1);
    } else if (next[0] === "A") {
      coordinates[0] -= +next.slice(1);
    } else if (next[0] === "S") {
      coordinates[1] -= +next.slice(1);
    }
    return pre;
  }, coordinates);

  console.log(`${res[0]},${res[1]}`);
});
