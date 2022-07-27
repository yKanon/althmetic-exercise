// 给出一个升序排序的链表，删除链表中的所有重复出现的元素，只保留原链表中只出现一次的元素。
// 例如：
// 给出的链表为1 \to 2\to 3\to 3\to 4\to 4\to51→2→3→3→4→4→5, 返回1\to 2\to51→2→5.
// 给出的链表为1\to1 \to 1\to 2 \to 31→1→1→2→3, 返回2\to 32→3.

// 数据范围：链表长度 0 \le n \le 100000≤n≤10000，链表中的值满足 |val| \le 1000∣val∣≤1000
// 要求：空间复杂度 O(n)O(n)，时间复杂度 O(n)O(n)
// 进阶：空间复杂度 O(1)O(1)，时间复杂度 O(n)O(n)

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
function deleteDuplicates(head) {
  // write code here
  if (!head || !head.next) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let cur = dummy;

  while (cur.next != null && cur.next.next != null) {
    if (cur.next.val === cur.next.next.val) {
      let temp = cur.next.val;

      while (cur.next && cur.next.val === temp) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
}
module.exports = {
  deleteDuplicates: deleteDuplicates,
};
