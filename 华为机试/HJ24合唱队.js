// 计算最少出列多少位同学，使得剩下的同学排成合唱队形

// 说明：

// N位同学站成一排，音乐老师要请其中的(N-K)位同学出列，使得剩下的K位同学排成合唱队形。
// 合唱队形是指这样的一种队形：设K位同学从左到右依次编号为1，2…，K，他们的身高分别为T1，T2，…，TK，   则他们的身高满足存在i（1<=i<=K）使得T1<T2<......<Ti-1<Ti>Ti+1>......>TK。

// 你的任务是，已知所有N位同学的身高，计算最少需要几位同学出列，可以使得剩下的同学排成合唱队形。

// 注意：不允许改变队列元素的先后顺序 且 不要求最高同学左右人数必须相等
// 请注意处理多组输入输出！

// 备注：
// 1<=N<=3000
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let lines = [];
function test(str) {
  lines = [];
  const list = str
    .trim()
    .split(/\s+/)
    .map((i) => parseInt(i));
  let cp = []; // 递增计数队列
  let cm = []; // 递减技术队列
  function getLen(list) {
    // 递增计数
    const result = [];
    const len = list.length;
    for (let i = 0; i < len; i++) {
      result[i] = 1;
    }
    for (let i = 0; i < len; i++) {
      let longest = 1;
      for (let j = 0; j < i; j++) {
        if (list[j] < list[i]) {
          longest = Math.max(longest, result[j]);
          result[i] = longest + 1;
        }
      }
    }
    return result;
  }
  cp = getLen(list);
  cm = getLen(list.reverse()).reverse();
  const maxlist = list.map((i, index) => {
    return cp[index] + cm[index];
  });
  return maxlist;
}
rl.on("line", (input) => {
  lines.push(input.trim());
  if (lines.length === 2) {
    const total = lines[0];
    str = lines[1];
    const max = Math.max.apply(null, test(str));
    console.log(total - max + 1);
  }
});
