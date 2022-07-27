// 请实现无重复数字的升序数组的二分查找

// 给定一个 元素升序的、无重复数字的整型数组 nums 和一个目标值 target ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标（下标从 0 开始），否则返回 -1

// 数据范围：0 \le len(nums) \le 2\times10^50≤len(nums)≤2×10
// 5
//   ， 数组中任意值满足 |val| \le 10^9∣val∣≤10
// 9

// 进阶：时间复杂度 O(\log n)O(logn) ，空间复杂度 O(1)O(1)

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @param target int整型
 * @return int整型
 */
function search(nums, target) {
  // write code here
  if (!nums.length) return -1;
  let left = 0,
    right = nums.length;

  while (left < right) {
    let mid = (left + right) >>> 1;
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
module.exports = {
  search: search,
};
