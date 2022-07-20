// 假设链表中每一个节点的值都在 0 - 9 之间，那么链表整体就可以代表一个整数。
// 给定两个这种链表，请生成代表两个整数相加值的结果链表。
// 数据范围：0 \le n,m \le 10000000≤n,m≤1000000，链表任意值 0 \le val \le 90≤val≤9
// 要求：空间复杂度 O(n)O(n)，时间复杂度 O(n)O(n)

// 例如：链表 1 为 9->3->7，链表 2 为 6->3，最后生成新的结果链表为 1->0->0->0。

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

function reverseList(head) {
  let prev = null;
  let len = 0;
  while (head) {
    let temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
    len++;
  }

  return [prev, len];
}
/**
 *
 * @param head1 ListNode类
 * @param head2 ListNode类
 * @return ListNode类
 */
function addInList(head1, head2) {
  // write code here
  let [p1, len1] = reverseList(head1);
  let [p2, len2] = reverseList(head2);

  if (len2 > len1) [p1, p2] = [p2, p1];

  let carry = 0;
  let resHead = p1;

  while (p2) {
    let sum = p1.val + p2.val + carry;
    p1.val = sum % 10;
    carry = Math.floor(sum / 10);
    p2 = p2.next;
    if (p2) p1 = p1.next;
  }

  while (carry) {
    if (p1.next) {
      p1 = p1.next;
      let sum = p1.val + carry;
      p1.val = sum % 10;
      carry = Math.floor(sum / 10);
    } else {
      p1.next = new ListNode(carry);
      carry = 0;
    }
  }

  let [res, len] = reverseList(resHead);
  return res;
}
module.exports = {
  addInList: addInList,
};
