/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
  // write code here
  // 新建空的链表表头
  const head = {
    val: null,
    next: null,
  };

  let cur = head;
  // 两个链表表头都不为空的情况，取较小值添加在新的链表后面。每次只把被添加的聊表的指针后移
  while (pHead1 && pHead2) {
    if (pHead1.val <= pHead2.val) {
      cur.next = pHead1;
      cur = cur.next;
      pHead1 = pHead1.next;
    } else {
      cur.next = pHead2;
      cur = cur.next;
      pHead2 = pHead2.next;
    }
  }

  // 遍历到最后，其中一个链表还有剩余节点。直接连接到新的链表后面
  if (pHead1) {
    cur.next = pHead1;
  } else {
    cur.next = pHead2;
  }

  return head.next;
}
module.exports = {
  Merge: Merge,
};
