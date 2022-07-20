// 给定一个链表，删除链表的倒数第 n 个节点并返回链表的头指针
// 例如，
// 给出的链表为: 1\to 2\to 3\to 4\to 51→2→3→4→5, n= 2n=2.
// 删除了链表的倒数第 nn 个节点之后,链表变为1\to 2\to 3\to 51→2→3→5.

// 数据范围： 链表长度 0\le n \le 10000≤n≤1000，链表中任意节点的值满足 0 \le val \le 1000≤val≤100
// 要求：空间复杂度 O(1)O(1)，时间复杂度 O(n)O(n)
// 备注：
// 题目保证 nn 一定是有效的

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param n int整型
 * @return ListNode类
 */
function removeNthFromEnd(head, n) {
  // write code here
  if (!head) return null;
  let len = 0,
    cur = head;

  while (cur) {
    cur = cur.next;
    len++;
  }
  cur = head;
  let index = len - n;
  if (index === 0) return head.next;

  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;
  return head;
}
module.exports = {
  removeNthFromEnd: removeNthFromEnd,
};
