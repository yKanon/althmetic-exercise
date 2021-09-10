// 给出两个有序的整数数组 和 ，请将数组 合并到数组 中，变成一个有序的数组
// 注意：
// 可以假设 数组有足够的空间存放 数组的元素， 和 中初始的元素数目分别为 和

/**
 *
 * @param A int整型一维数组
 * @param B int整型一维数组
 * @return void
 */
function merge(A, m, B, n) {
  // write code here
  if (n === 0) return A;
  if (m === 0) return Object.assign(A, B);

  while (m > 0 && n > 0) {
    if (A[m - 1] >= B[n - 1]) {
      A[m + n - 1] = A[m - 1];
      m -= 1;
    } else {
      A[m + n - 1] = B[n - 1];
      n -= 1;
    }
  }

  while (n) {
    A[n - 1] = B[--n];
  }
  return A;
}
module.exports = {
  merge: merge,
};
