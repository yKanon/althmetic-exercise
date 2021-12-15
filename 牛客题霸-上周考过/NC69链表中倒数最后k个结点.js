// 输入一个链表，输出该链表中倒数第k个结点。
// 如果该链表长度小于k，请返回空。

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
function FindKthToTail(pHead, k) {
  // write code here
  if (pHead === null) return pHead;
  let first = pHead,
    second = pHead;

  while (k--) {
    if (first === null) return null;
    first = first.next;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  return second;
}
module.exports = {
  FindKthToTail: FindKthToTail,
};
