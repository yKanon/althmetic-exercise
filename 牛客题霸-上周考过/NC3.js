// 对于一个给定的链表，返回环的入口节点，如果没有环，返回null
// 拓展：
// 你能给出不利用额外空间的解法么？

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @return ListNode类
 */
function detectCycle(head) {
  // write code here
  if (!head) return null;
  if (head.next === false) return head;
  if (!head.next) return null;
  let next = head.next;
  head.next = false;
  return detectCycle(next);
}
module.exports = {
  detectCycle: detectCycle,
};
