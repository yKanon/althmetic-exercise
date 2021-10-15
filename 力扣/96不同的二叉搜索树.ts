let memo;

// 计算闭区间[start, end]组成的bst个数
function count(start: number, end: number): number {
  if (start > end) return 1;
  if (memo[start][end] !== undefined) return memo[start][end];
  let res = 0;

  // 以i的值作为root。计算左右子树的bst个数。
  for (let i = start; i <= end; i++) {
    let left = count(start, i - 1);
    let right = count(i + 1, end);

    // 左右子树的组合数乘积ast的总数
    res += left * right;
  }

  // 将结果存入备忘录
  memo[start][end] = res;
  return res;
}

function numTrees(n: number): number {
  memo = Array.from(new Array(n + 1), () => new Array(n + 1));
  return count(1, n);
}
