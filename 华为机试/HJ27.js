// 定义一个单词的“兄弟单词”为：交换该单词字母顺序，而不添加、删除、修改原有的字母就能生成的单词。
// 兄弟单词要求和原来的单词不同。例如：ab和ba是兄弟单词。ab和ab则不是兄弟单词。
// 现在给定你n个单词，另外再给你一个单词str，让你寻找str的兄弟单词里，字典序第k大的那个单词是什么？
// 注意：字典中可能有重复单词。本题含有多组输入数据。
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const sortedStr = (target) => target.split("").sort().join("");

rl.on("line", function (line) {
  const arr = line.split(" ");
  const n = arr.shift(); // 输入单词的个数
  const k = arr.splice(-1)[0]; // 第k个兄弟单词
  const dic = []; // 缓存字典
  const target = arr.splice(-1)[0]; // 目标单词

  const isBro = (a, b) => {
    if (a === b) return false;
    //     if (dic.includes(a)) return false
    else if (sortedStr(a) === sortedStr(b)) return true;
    return false;
  };

  arr.forEach((i) => {
    if (isBro(i, target)) {
      dic.push(i);
    }
  });

  console.log(dic.length);
  if (!dic[k]) return;

  dic.sort((a, b) => {
    if (a > b) return 1;
    else return -1;
  });
  console.log(dic[k - 1]);
});
