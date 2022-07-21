// 输入描述：
// 输入分为2段，第一段是入环前的链表部分，第二段是链表环的部分，后台会根据第二段是否为空将这两段组装成一个无环或者有环单链表
// 返回值描述：
// 返回链表的环的入口结点即可，我们后台程序会打印这个结点对应的结点值；若没有，则返回对应编程语言的空结点即可。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  if (!pHead || !pHead.next) return null;

  let fast = pHead,
    slow = pHead;
  // write code here
  while (fast) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast == slow) {
      fast = pHead;
      while (fast != slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return fast;
    }
  }
  return null;
}
module.exports = {
  EntryNodeOfLoop: EntryNodeOfLoop,
};
