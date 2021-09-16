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

function reverse(head: ListNode): ListNode {
  let pre = null,
    cur = head;

  while (cur !== null) {
    let nxt = cur.next;

    cur.next = pre;
    pre = cur;
    cur = nxt;
  }

  return pre;
}

function isPalindrome(head: ListNode | null): boolean {
  // 快慢指针
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // 链表长度为奇数,slow指针处于中点，再向前走一步
  if (fast !== null) {
    slow = slow.next;
  }

  // 将slow指针后面的链表反转，对ListNode.val进行比较
  let left = head,
    right = reverse(slow);
  while (right !== null) {
    if (right.val !== left.val) return false;
    right = right.next;
    left = left.next;
  }
  return true;
}
