/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
//  反转[a, b)的链表, 返回新的head
function reverse(a: ListNode, b: ListNode): ListNode {
  let pre = null,
    cur = a,
    nxt = a;

  // 遍历更改每个节点的next
  while (cur !== b) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }

  // 返回反转后的头节点
  return pre;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return head;

  // 令区间[a, b)内包含k个待反转元素
  // 首尾指针
  let a = head,
    b = head;

  for (let i = 0; i < k; i++) {
    // 发现剩余元素不够k个，不需要反转
    if (b === null) return head;
    b = b.next;
  }

  // 反转区间内的元素
  let newHead = reverse(a, b);
  // 反转后链接下一区间反转后的头节点
  a.next = reverseKGroup(b, k);
  return newHead;
}
