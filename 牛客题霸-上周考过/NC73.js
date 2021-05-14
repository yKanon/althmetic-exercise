// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。你可以假设数组是非空的，并且给定的数组总是存在多数元素。1<=数组长度<=50000

function MoreThanHalfNum_Solution(numbers) {
  // write code here
  if (numbers.length === 0) return 0;
  //   let map = new Map()
  let map = {};
  numbers.reduce((pre, cur) => {
    let val = pre[cur];
    if (val) {
      pre[cur] += 1;
    } else {
      pre[cur] = 1;
    }

    return map;
  }, map);

  //   let vals = map.values()
  //   let arr = Array.from(vals)
  let vals = Object.keys(map).map((i) => map[i]);
  let res = Math.max(...vals);
  if (res > numbers.length >> 1) {
    for (let i of Object.keys(map)) {
      if (map[i] === res) return i;
    }
  } else return 0;
}
module.exports = {
  MoreThanHalfNum_Solution: MoreThanHalfNum_Solution,
};
