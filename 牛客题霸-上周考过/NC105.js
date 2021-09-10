// 请实现有重复数字的升序数组的二分查找
// 给定一个 元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 如果目标值存在返回下标，否则返回 -1
 * @param nums int整型一维数组
 * @param target int整型
 * @return int整型
 */
function search(nums, target) {
  // write code here
  if (!nums.includes(target)) {
    return -1;
  }

  return getTargetIndex(nums, target, 0, nums.length - 1);
}

function getTargetIndex(nums, target, left, right) {
  let index;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] == target) {
      index = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return index;
}

module.exports = {
  search: search,
};
