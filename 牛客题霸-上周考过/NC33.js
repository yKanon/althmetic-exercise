// 合并有序列表
// 将两个有序的链表合并为一个新链表，要求新的链表是通过拼接两个链表的节点来生成的，且合并后新链表依然有序。
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param l1 ListNode类
 * @param l2 ListNode类
 * @return ListNode类
 */
function mergeTwoLists(l1, l2) {
  // write code here
  if (!l1) return l2;
  if (!l2) return l1;
  let ret = new ListNode(0);
  let cur = ret;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 === null ? l2 : l1;
  return ret.next;
}
module.exports = {
  mergeTwoLists: mergeTwoLists,
};
