// 王强今天很开心，公司发给N元的年终奖。王强决定把年终奖用于购物，他把想买的物品分为两类：主件与附件，附件是从属于某个主件的，下表就是一些主件与附件的例子：

// 主件	附件
// 电脑	打印机，扫描仪
// 书柜	图书
// 书桌	台灯，文具
// 工作椅	无

// 如果要买归类为附件的物品，必须先买该附件所属的主件。每个主件可以有 0 个、 1 个或 2 个附件。附件不再有从属于自己的附件。王强想买的东西很多，为了不超出预算，他把每件物品规定了一个重要度，分为 5 等：用整数 1 ~ 5 表示，第 5 等最重要。他还从因特网上查到了每件物品的价格（都是 10 元的整数倍）。他希望在不超过 N 元（可以等于 N 元）的前提下，使每件物品的价格与重要度的乘积的总和最大。
//     设第 j 件物品的价格为 v[j] ，重要度为 w[j] ，共选中了 k 件物品，编号依次为 j 1 ， j 2 ，……， j k ，则所求的总和为：
// v[j 1 ]*w[j 1 ]+v[j 2 ]*w[j 2 ]+ … +v[j k ]*w[j k ] 。（其中 * 为乘号）
//     请你帮助王强设计一个满足要求的购物单。

// dp： 当目标金额为N时，不超过总钱数的物品的价格与重要度乘积的总和的最大值
// N < 32000, 又由于价格是10的倍数，所以dp数组的维度最大为3200
// m < 60

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

let N = -1,
  m = -1;
let v, p, q;
// const input = []
let val = []; // 重要度与价格的乘积，主件，1个附件，2个附件
let cst = []; // 价格。主件，1个附件，2个附件
let dp = [];
let idx = 0;
rl.on("line", (line) => {
  if (N === -1) {
    [N, m] = line.split(" ").map((item) => parseInt(item));
    for (let i = 0; i < m; i++) {
      cst.push([0, 0, 0]);
      val.push([0, 0, 0]);
    }

    dp = Array(N / 10 + 1).fill(0);
  } else {
    [v, p, q] = line.split(" ").map((item) => parseInt(item));
    cst[idx] = [0, 0, 0];
    val[idx] = [0, 0, 0];
    if (q == 0) {
      cst[idx] = [v, 0, 0];
      val[idx] = [v * p, 0, 0];
    } else {
      if (q > 0 && val[q - 1][1] == 0) {
        cst[q - 1][1] = v;
        val[q - 1][1] = v * p;
      } else if (q > 0) {
        cst[q - 1][2] = v;
        val[q - 1][2] = v * p;
      }
    }
    idx++;
  }
  if (idx == m) {
    rl.close();
  }
});

rl.on("close", () => {
  for (let i = 0; i < m; i++) {
    for (let j = N / 10; j >= cst[i][0] / 10; j--) {
      // if (j >= cst[i][0] /10 ) {
      dp[j] = Math.max(dp[j - cst[i][0] / 10] + val[i][0], dp[j]);
      // }
      let tmp = cst[i][0] / 10 + cst[i][1] / 10;
      if (cst[i][2] != 0 && j >= tmp) {
        dp[j] = Math.max(dp[j - tmp] + val[i][0] + val[i][1], dp[j]);
      }
      tmp = cst[i][0] / 10 + cst[i][1] / 10 + cst[i][2] / 10;
      if (cst[i][2] != 0 && j >= tmp) {
        dp[j] = Math.max(
          dp[j - tmp] + val[i][0] + val[i][1] + val[i][2],
          dp[j]
        );
      }
    }
  }
  console.log(dp[N / 10]);
});
