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

// 1. 递归
function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  // let cur = head

  // cur = cur.next
  let res = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return res;
}
