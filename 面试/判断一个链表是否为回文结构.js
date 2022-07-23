// 描述
// 给定一个链表，请判断该链表是否为回文结构。
// 回文是指该字符串正序逆序完全一致。
// 数据范围： 链表节点数 0 \le n \le 10^50≤n≤10
// 5
//  ，链表中每个节点的值满足 |val| \le 10^7∣val∣≤10
// 7

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类 the head
 * @return bool布尔型
 */
function isPail(head) {
  // write code here
  let arr1 = [],
    arr2 = [];

  while (head) {
    arr1.push(head.val);
    arr2.unshift(head.val);
    head = head.next;
  }

  return arr1.every((i, index) => {
    return i === arr2[index];
  });
}
module.exports = {
  isPail: isPail,
};
