// 给定一个数组arr，返回arr的最长无重复元素子数组的长度，无重复指的是所有数字都不相同。
// 子数组是连续的，比如[1,2,3,4,5]的子数组有[1,2]，[2,3,4]等等，但是[1,3,4]不是子数组

/**
 *
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength(arr) {
  // write code here
  let start = 0;
  let end = 0;
  let len = 0;
  let map = new Map();

  while (end < arr.length) {
    let tem = map.get(arr[end]);
    if (tem >= start) {
      start = tem + 1;
    } else {
      len = Math.max(len, end - start + 1);
    }
    map.set(arr[end], end);

    end++;
  }

  return len;
}

module.exports = {
  maxLength: maxLength,
};
