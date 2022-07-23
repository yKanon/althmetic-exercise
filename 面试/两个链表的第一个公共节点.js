// 输入两个无环的单向链表，找出它们的第一个公共结点，如果没有公共节点则返回空。（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）

// 数据范围： n \le 1000n≤1000
// 要求：空间复杂度 O(1)O(1)，时间复杂度 O(n)O(n)

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
  // write code here
  let p1 = pHead1,
    p2 = pHead2;
  while (p1 != p2) {
    p1 = p1 ? p1.next : pHead2;
    p2 = p2 ? p2.next : pHead1;
  }

  return p1;
}
module.exports = {
  FindFirstCommonNode: FindFirstCommonNode,
};
