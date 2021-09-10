// 对于一个字符串，请设计一个高效算法，计算其中最长回文子串的长度。

// 给定字符串A以及它的长度n，请返回最长回文子串的长度。

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * @param A string字符串
 * @param n int整型
 * @return int整型
 */
export function getLongestPalindrome(A: string, n: number): number {
  // write code here
  if (n < 2) return n;

  let left = 0,
    right = 0,
    maxLen = 0,
    index = 0;

  while (right < n) {
    left = index;
    right = index;
    while (A.charAt(right) === A.charAt(left) && right < n) {
      right++;
    }
    index = right;
    right--;
    while (left >= 0 && A.charAt(left) === A.charAt(right) && right < n) {
      if (maxLen < right - left + 1) {
        maxLen = right - left + 1;
      }
      if (left === 0) {
        break;
      }
      left--;
      right++;
    }
  }
  return maxLen;
}
