// 给定一个 n * m 的矩阵 a，从左上角开始每次只能向右或者向下走，最后到达右下角的位置，路径上所有的数字累加起来就是路径和，输出所有的路径中最小的路径和。

/**
 *
 * @param matrix int整型二维数组 the matrix
 * @return int整型
 */
function minPathSum(matrix) {
  // write code here

  let row = matrix.length;
  let col = matrix[0].length;
  // 在只有一行或一列时，直接累加
  if (row === 1 || col === 1)
    return matrix.flat().reduce((pre, next) => pre + next);

  const dp = Array.from(new Array(row), () => new Array(col));
  dp[0][0] = matrix[0][0];
  for (let i = 1; i < row; i++) {
    dp[i][0] = dp[i - 1][0] + matrix[i][0];
  }
  for (let i = 1; i < col; i++) {
    dp[0][i] = dp[0][i - 1] + matrix[0][i];
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + matrix[i][j];
    }
  }

  return dp[row - 1][col - 1];
}
module.exports = {
  minPathSum: minPathSum,
};
