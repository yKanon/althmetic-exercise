// 给定一个数组，找出其中最小的K个数。例如数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。如果K>数组的长度，那么返回一个空的数组
function GetLeastNumbers_Solution(input, k) {
  let [...arr] = input;
  if (k > arr.length) return (arr.length = 0);
  arr.sort((a, b) => a - b);
  arr.length = k;
  return arr;
}
module.exports = {
  GetLeastNumbers_Solution: GetLeastNumbers_Solution,
};
