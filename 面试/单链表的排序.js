/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

// 给定一个节点数为n的无序单链表，对其按升序排序。

/**
 *
 * @param head ListNode类 the head node
 * @return ListNode类
 */
function sortInList(head) {
  // write code here
  let arr = [];
  let curHead = head;
  while (curHead) {
    arr.push(curHead.val);
    curHead = curHead.next;
  }
  arr.sort((a, b) => a - b);
  let cur = head;

  for (let i = 0; i < arr.length; i++) {
    cur.val = arr[i];
    cur = cur.next;
  }

  return head;
}
module.exports = {
  sortInList: sortInList,
};
