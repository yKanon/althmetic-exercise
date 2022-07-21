// 描述
// 合并 k 个升序的链表并将结果作为一个升序的链表返回其头节点。
/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param lists ListNode类一维数组
 * @return ListNode类
 */
function mergeKLists(lists) {
  // write code here
  return divideMerge(lists, 0, lists.length);
}
function divideMerge(lists, left, right) {
  if (left > right) return null;
  if (left == right) return lists[left];

  let mid = Math.floor((left + right) / 2);
  return Merge(
    divideMerge(lists, left, mid),
    divideMerge(lists, mid + 1, right)
  );
}
function Merge(pHead1, pHead2) {
  let result, pointer;

  if (!pHead1) return pHead2;
  if (!pHead2) return pHead1;

  while (pHead1 && pHead2) {
    let min;
    if (pHead1.val < pHead2.val) {
      min = pHead1;
      pHead1 = pHead1.next;
    } else {
      min = pHead2;
      pHead2 = pHead2.next;
    }

    if (!pointer) pointer = result = min;
    else {
      pointer.next = min;
      pointer = pointer.next;
    }
  }

  if (pHead1) pointer.next = pHead1;
  if (pHead2) pointer.next = pHead2;

  return result;
}
module.exports = {
  mergeKLists: mergeKLists,
};
