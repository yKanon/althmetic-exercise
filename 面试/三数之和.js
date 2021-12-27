/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []
  if (nums === null || nums.length < 3) return res

  let sortedArr = nums.sort((a, b) => a - b)
  let len = sortedArr.length

  for (let i = 0; i < len - 2; i++) {
    if (sortedArr[i] > 0) return res
    let left = i + 1, right = len - 1
    if (sortedArr[i] === sortedArr[i - 1]) continue

    while (left < right) {
      const sum = sortedArr[left] + sortedArr[right] + sortedArr[i]


      if (sum === 0) {
        res.push([sortedArr[i], sortedArr[left], sortedArr[right]])
        while (sortedArr[left] === sortedArr[left + 1]) left++
        while (sortedArr[right] === sortedArr[right - 1]) right--
        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }

    }
  }

  return res
};