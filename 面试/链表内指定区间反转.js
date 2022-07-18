// 将一个节点数为 size 链表 m 位置到 n 位置之间的区间反转，要求时间复杂度 O(n)O(n)，空间复杂度 O(1)O(1)。
// 例如：
// 给出的链表为 1\to 2 \to 3 \to 4 \to 5 \to NULL1→2→3→4→5→NULL, m=2,n=4m=2,n=4,
// 返回 1\to 4\to 3\to 2\to 5\to NULL1→4→3→2→5→NULL.

// 数据范围： 链表长度 0 < size \le 10000<size≤1000，0 < m \le n \le size0<m≤n≤size，链表中每个节点的值满足 |val| \le 1000∣val∣≤1000
// 要求：时间复杂度 O(n)O(n) ，空间复杂度 O(n)O(n)
// 进阶：时间复杂度 O(n)O(n)，空间复杂度 O(1)O(1)

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

function reverse(head) {
  if (!head.next) return;
}
/**
 *
 * @param head ListNode类
 * @param m int整型
 * @param n int整型
 * @return ListNode类
 */
function reverseBetween(head, m, n) {
  // write code here
  //     统一新增头部节点，避免m=1的情况
  let dummy = new ListNode(-1);
  dummy.next = head;
  let cur = dummy;
  for (let i = 0; i < m - 1; i++) {
    cur = cur.next;
  }
  let temp = cur.next;

  for (let i = m; i < n; i++) {
    let next = temp.next;
    temp.next = next.next;
    next.next = cur.next;
    cur.next = next;
  }

  return dummy.next;
}
module.exports = {
  reverseBetween: reverseBetween,
};
