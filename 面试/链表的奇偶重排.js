// 给定一个单链表，请设定一个函数，将链表的奇数位节点和偶数位节点分别放在一起，重排后输出。
// 注意是节点的编号而非节点的数值。

// 数据范围：节点数量满足 0 \le n \le 10^50≤n≤10
// 5
//  ，节点中的值都满足 0 \le val \le 10000≤val≤1000
// 要求：空间复杂度 O(n)O(n)，时间复杂度 O(n)O(n)

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
 * @param head ListNode类
 * @return ListNode类
 */
function oddEvenList(head) {
  // write code here
  if (head == null) return null;
  let oddList = head,
    evenList = head.next;
  let odd = oddList,
    even = evenList;

  while (even != null && even.next != null) {
    odd.next = even.next;
    odd = odd.next.next;

    even.next = odd.next;
    even = even.next.next;
  }

  odd.next = evenList;
  return oddList;
}
module.exports = {
  oddEvenList: oddEvenList,
};
