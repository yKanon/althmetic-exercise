//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let succesor = null;

//  反转前n个节点
function reverseN(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return null;

  if (n === 1) {
    succesor = head.next;
    return head;
  }

  let last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = succesor;

  return last;
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (head === null) return null;

  if (left === 1) {
    return reverseN(head, right);
  }

  head.next = reverseBetween(head.next, left - 1, right - 1);

  return head;
}
