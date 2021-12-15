// 判断给定的链表中是否有环。如果有环则返回true，否则返回false。
// 你能给出空间复杂度的解法么？

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @return bool布尔型
 */
function hasCycle(head) {
  // write code here
  if (head === null) return false;
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
module.exports = {
  hasCycle: hasCycle,
};
