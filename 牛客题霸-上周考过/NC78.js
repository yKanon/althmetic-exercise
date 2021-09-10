// 输入一个链表，反转链表后，输出新链表的表头。
function ReverseList(pHead) {
  let stack = [];
  while (pHead) {
    stack.push(pHead);
    pHead = pHead.next;
  }
  if (stack.length === 0) return null;
  let final = stack.reduceRight((prev, cur) => {
    prev.next = cur;
    return cur;
  });
  final.next = null;
  return stack[stack.length - 1];
}
module.exports = {
  ReverseList: ReverseList,
};
